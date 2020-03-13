import Post from "store/models/Post";
import types from "store/types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.TOGGLE_POST_LIKE_SUCCESS:
      return {
        ...state,
        item: new Post(payload),
        errorMessage: ""
      };

    case types.DELETE_POST:
      return {
        ...state,
        isFetching: true,
        errorMessage: ""
      };

    case types.DELETE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: new Post(),
        errorMessage: ""
      };

    case types.DELETE_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: ""
      };

    case types.ADD_POST_COMMENT:
      return {
        ...state,
        isFetchingComments: true,
        errorMessage: ""
      };

    case types.ADD_POST_COMMENT_SUCCESS:
      return {
        ...state, 
        isFetchingComments: false,
        item: new Post(payload)
      };

    case types.ADD_POST_COMMENT_FAILURE:
      return {
        ...state,
        isFetchingComments: false,
        errorMessage: payload.message
      };

    case types.FETCH_POST:
      return {
        ...state,
        isFetching: true,
        isFetchingComments: false,
        item: new Post(),
        errorMessage: ""
      };

    case types.FETCH_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: new Post(payload)
      };

    case types.FETCH_POST_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload.message
      };

    case types.UPDATE_POST:
      return {
        ...state,
        isFetching: true,
        errorMessage: ""
      };

    case types.UPDATE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        item: new Post(payload)
      };

    case types.UPDATE_POST_FAILURE:
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