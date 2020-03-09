import Post from "../models/Post";
import types from "../types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS_SUCCESS:
      state = payload.items
        .map(post => new Post(post));
      return state;

    case types.FETCH_POSTS_FAILURE:
      return state;

    case types.CREATE_POST:
      state.push(new Post(payload));
      return state;

    case types.DELETE_POST:
      state = state
        .filter(post => post.id !== payload.id);
      return state;

    default:
      return state;
  }
}

export default reducer;