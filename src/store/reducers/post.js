import Post from "../models/Post";
import types from "../types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_POST:
      return { ...state, isFetching: true, item: new Post(), errorMessage: "" };

    case types.FETCH_POST_SUCCESS:
      return { ...state, isFetching: false, item: new Post(payload) };

    case types.FETCH_POST_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload.message };

    case types.UPDATE_POST:
      return { ...state, isFetching: true, errorMessage: "" };

    case types.UPDATE_POST_SUCCESS:
      return { ...state, isFetching: false, item: new Post(payload) };

    case types.UPDATE_POST_FAILURE:
      return { ...state, isFetching: false, errorMessage: payload.message };

    default:
      return state;
  }
}

export default reducer;