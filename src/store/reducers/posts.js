import Post from "store/models/Post";
import types from "store/types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_POSTS:
      return {
        ...state,
        isFetching: true,
        items: [],
        errorMessage: ""
      };

    case types.FETCH_POSTS_SUCCESS:
      const items = payload
        .map(post => new Post(post));

      return {
        ...state,
        isFetching:
        false,
        items
      };

    case types.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        errorMessage: payload.message
      };

    case types.CREATE_POST:
      return {
        ...state,
        isFetching: true,
      };

    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };

    case types.CREATE_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload.message
      };

    default:
      return state;
  }
}

export default reducer;