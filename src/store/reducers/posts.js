import Post from '../models/Post';
import types from '../types';

const reducer = (posts = [], { type, payload }) => {
  switch (type) {
    case types.CREATE_POST:
      posts.push(new Post(payload));
      return posts;

    case types.DELETE_POST:
      posts = posts
        .filter(post => post.id !== payload.id);
      return posts;

    default:
      return posts;
  }
}

export default reducer;