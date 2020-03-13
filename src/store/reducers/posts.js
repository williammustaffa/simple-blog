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
      state.push(new Post(payload));
      return state;

    case types.CREATE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items
      };

    case types.CREATE_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        items: [],
        errorMessage: payload.message
      };

    default:
      return state;
  }
}

export default reducer;