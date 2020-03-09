import Post from "../models/Post";
import types from "../types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case type.FETCH_POST:
      state = new Post();
      return state;

    case types.FETCH_POST_SUCCESS:
      state = new Post(payload);
      return state;

    case types.FETCH_POST_FAILURE:
      return state;

    default:
      return state;
  }
}

export default reducer;