import Post from "../models/Post";

const reducer = (posts = [], { type, payload }) => {
  switch (type) {
    case 'addPost':
      posts.push(new Post(payload));
      return posts;
    case 'removePost':
      posts = posts
        .filter(post => post.id !== payload.id);
      return posts;

    default:
      return posts;
  }
}

export default reducer;