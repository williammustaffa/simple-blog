
import FakeDB from "../FakeDB";

const retrieveDataDelayed = (value, time = 3000) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), time);
  });
}

function clone(targetObject) {
  return JSON.parse(
    JSON.stringify(targetObject)
  );
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

    // Clone original data
    const _categories = clone(categories);

    // Return a fake API response
    const response = {
      items: _categories,
    };

    return retrieveDataDelayed(response, 4000);
  }

  /**
   * Fetch post by id
   * @param {string} id 
   */
  fetchPost(id) {
    const { posts, profiles, categories } = FakeDB;

    // Clone original data
    const _posts = clone(posts);
    const _profiles = clone(profiles);
    const _categories = clone(categories);

    // Find respective post
    const response = _posts
      .find(post => String(post.id) === String(id));

    // Link author data
    if (response) {
      response.author = _profiles
        .find(profile => String(profile.id) === String(response.author));

      response.categories = response.categories
        .map(catId => _categories.find(_cat => String(_cat.id) === String(catId)))
        .filter(category => !!category);
    }

    return retrieveDataDelayed(response);
  }

  /**
   * Fetch list of posts
   */
  fetchPosts() {
    const { posts, profiles, categories } = FakeDB;

    // Clone original data
    const _posts = clone(posts);
    const _profiles = clone(profiles);
    const _categories = clone(categories);

    // Map posts and link author data
    for (const post of _posts) {
      post.author = _profiles
        .find(profile => String(profile.id) === String(post.author));

      post.categories = post.categories
        .map(catId => _categories.find(cat => String(cat.id) === String(catId)))
        .filter(category => !!category);
    }

    // Return a fake API response
    const response = {
      items: _posts,
    };

    return retrieveDataDelayed(response);
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