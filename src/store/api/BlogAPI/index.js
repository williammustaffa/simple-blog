const posts = {
  items: [{
    id: "1",
    title: "Post test 1",
    content: "asdasd adsasda asd asd asdas dadsadasdasd asd asd\basdasdasd\basdasdasd",
  },
  {
    id: "2",
    title: "Post test 2",
    content: "asdasd adsasda asd asd asdas dadsadasdasd asd asd\basdasdasd\basdasdasd",
  }]
};

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

  fetchPost(id) {
    const targetPost = posts.items
      .find(post => String(post.id) === String(id));

    return retrieveDataDelayed(targetPost);
  }

  fetchPosts() {
    return retrieveDataDelayed(posts);
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