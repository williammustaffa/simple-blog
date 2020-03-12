import Post from "../models/Post";
import types from "../types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS:
      return { ...state, isFetching: true, items: [], errorMessage: "" };

    case types.FETCH_POSTS_SUCCESS:
      const items = payload.items.map(post => new Post(post));

      return { ...state, isFetching: false, items };

    case types.FETCH_POSTS_FAILURE:
      return { ...state, isFetching: false, items: [], errorMessage: payload.message };

    case types.CREATE_POST:
      state.push(new Post(payload));
      return state;

    case types.CREATE_POST_SUCCESS:
      return { ...state, isFetching: false, items };

      return state;

    case types.CREATE_POST_FAILURE:
      return { ...state, isFetching: false, items: [], errorMessage: payload.message };

      return state;

    default:
      return state;
  }
}

export default reducer;