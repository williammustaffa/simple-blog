
import FakeDB from "../FakeDB";

const retrieveDataDelayed = (value, time = 3000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), time);
  });
}

class BlogAPI {
  createPost() {

  }

  deletePost() {

  }

  createProfile(profile) {
    
  }

  /**
   * Fetch categories list
   */
  fetchCategories() {
    const { categories } = FakeDB;

    // Return a fake API response
    const response = {
      items: categories,
    };

    return retrieveDataDelayed(response, 500);
  }

  /**
   * Fetch post by id
   * @param {string} id 
   */
  fetchPost(id) {
    const { posts, profiles } = FakeDB;

    // Find respective post
    const response = posts
      .find(post => String(post.id) === String(id));

    // Link author data
    if (response) {
      response.author = profiles
        .find(profile => String(profile.id) === String(response.author));
    }

    return retrieveDataDelayed(response);
  }

  /**
   * Fetch list of posts
   */
  fetchPosts() {
    let { posts, profiles } = FakeDB;

    // Map posts and link author data
    posts = posts.map(post => {
      if (post) {
        post.author = profiles
          .find(profile => String(profile.id) === String(post.author));
      }

      return post;
    });

    // Return a fake API response
    const response = {
      items: posts,
    };

    return retrieveDataDelayed(response);
  }
}

let connectorInstance = null;
function getBlogAPIConnector() {
  if (!connectorInstance) {
    connectorInstance = new BlogAPI();
  }

  return connectorInstance;
}


export { BlogAPI, getBlogAPIConnector };