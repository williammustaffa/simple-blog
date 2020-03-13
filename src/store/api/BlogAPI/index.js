
import database from "store/api/database";
import moment from "moment";
import { clone } from "utils/index.js";
import { v1 as uuidv1 } from 'uuid';

const retrieveDataDelayed = (value, time = 500) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), time);
  });
}

const retrieveErrorDelayed = (value, time = 500) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ message: value }), time);
  });
}

const tokenize = ({ id, email }) => {
  return btoa(JSON.stringify({ id, email }));
}

const getTokenizedInfo = token => {
  return token && JSON.parse(atob(token));
}

class BlogAPI {
  /**
   * Fetch relational data from post object
   * @param {object} post 
   */
  populatePostData = (post) => {
    // Fetch categories data
    post.categories = post.categories.map(categoryId => {
      return database.queryAll("categories", {
        query: { id: categoryId }
      })[0];
    });

    // Fetch author
    post.author = database.queryAll("profiles", {
      query: { id: post.author }
    })[0];

    // Fetch comments author
    post.comments = post.comments
      .map(comment => {
        comment.author = database.queryAll("profiles", {
          query: { id: comment.author }
        })[0];

        return comment;
      })
      .sort((commentA, commentB) => {
        const creationDateA = commentA.creationDate;
        const creationDateB = commentB.creationDate;

        if (moment(creationDateA).isBefore(creationDateB)) {
          return 1;
        }

        if (moment(creationDateA).isAfter(creationDateB)) {
          return -1;
        }

        return 0;
      });

    return post;
  }

  /**
   * Check user session an then populate data if needed
   */
  userCheckSession = () => {
    const authToken = localStorage.getItem("authToken");

    const data = getTokenizedInfo(authToken);

    const results = database.queryAll("profiles", {
      query: { id: data.id },
    });

    if (!results.length) {
      return retrieveErrorDelayed("No session found.");
    }

    const user = clone(results[0]);

    // No need to delay on first load
    return user;
  }

  /**
   * Do user login by given crendentials
   * @param {object} credentials 
   */
  userLogin(credentials) {
    delete credentials.redirectUrl;

    const results = database.queryAll("profiles", {
      query: credentials,
    });

    if (!results.length) {
      return retrieveErrorDelayed("You have entered an invalid username or password");
    }

    const user = clone(results[0]);

    // Fake a token storage
    localStorage.setItem("authToken", tokenize(user));

    return retrieveDataDelayed(user, 3000);
  }

  /**
   * Clear user session when he loogs out
   */
  userLogout = () => {
    // Clear token
    localStorage.removeItem("authToken");

    return retrieveDataDelayed(null, 0);
  }

  /**
   * Add comment to the post
   * TODO: We should handle posts in a separate table
   * using the relational approach
   */
  addPostComment = (payload) => {
    const { postId, author, content } = payload;

    database.update("posts", { id: postId }, post => {
      post.comments.push({
        id: uuidv1(),
        creationDate: Date.now(),
        author,
        content,
      });

      return post;
    });

    database.commit();

    return this.fetchPost(postId);
  }

  togglePostLike = (payload) => {
    const { profileId, postId } = payload;

    database.update("posts", { id: postId }, post => {
      if (post.likes.includes(profileId)) {
        post.likes = post.likes.filter(id => id !== profileId);
      } else {
        post.likes.push(profileId);
      }

      return post;
    });

    database.commit();

    return this.fetchPost(postId, true);
  }

  /**
   * Update post
   * Works like a PUT request
   */
  updatePost = (payload) => {
    database.update("posts", { id: payload.id }, post => {
      post.title = payload.title;
      post.imageUrl = payload.imageUrl;
      post.content = payload.content;
      post.categories = payload.categories;

      return post;
    });

    // Save data
    database.commit();

    // Retrieve post
    return this.fetchPost(payload.id);
  }

  /**
   * Create a post
   */
  createPost = (payload) => {
    const postId = uuidv1();

    database.insert("posts", {
      ...payload,
      id: postId,
      creationDate: Date.now(),
      comments: [],
      likes: [],
    });

    database.commit();

    return this.fetchPost(postId);
  }


  /**
   * Delete a post
   */
  deletePost = (id) => {
    database.deleteRows("posts", { id });
    database.commit();

    return retrieveDataDelayed({ success: true });
  }

  /**
   * Fetch categories list
   */
  fetchCategories = () => {
    const results = database.queryAll("categories");
    const categories = clone(results);

    return retrieveDataDelayed(categories);
  }

  /**
   * Fetch post by id
   * @param {string} id 
   */
  fetchPost = (id, instant) => {
    const results = database.queryAll("posts", { query: { id } });

    if (!results.length) {
      throw new Error(`Post with id ${id} not found.`);
    }

    const post = this.populatePostData(clone(results[0]));
    if (instant) return post;

    return retrieveDataDelayed(post);
  }

  /**
   * Fetch list of posts
   */
  fetchPosts = (filter = {}) => {
    const results = database.queryAll("posts", filter);
    const posts = clone(results).map(this.populatePostData);

    return retrieveDataDelayed(posts);
  }
}

// Create a cached connector
let connectorInstance = null;
function getBlogAPIConnector() {
  if (!connectorInstance) {
    connectorInstance = new BlogAPI();
  }

  return connectorInstance;
}


export { BlogAPI, getBlogAPIConnector };