
import LocalDB from "../LocalDB";

const retrieveDataDelayed = (value) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(value), 3000);
  });
}

class BlogAPI {
  createPost() {

  }

  deletePost() {

  }

  createProfile() {

  }

  fetchPost(id) {
    const { posts, profiles } = LocalDB;

    const response = posts
      .find(post => String(post.id) === String(id));

    if (response) {
      response.author = profiles
        .find(profile => String(profile.id) === String(response.author));
    }

    return retrieveDataDelayed(response);
  }

  fetchPosts() {
    const { posts } = LocalDB;
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