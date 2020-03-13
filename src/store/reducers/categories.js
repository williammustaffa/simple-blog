import Category from "store/models/Category";
import types from "store/types";

const reducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_CATEGORIES:
      return {
        ...state,
        isFetching: true,
        items: [],
        errorMessage: ""
      };

    case types.FETCH_CATEGORIES_SUCCESS:
      const categories = payload
        .map(category => new Category(category));

      return {
        ...state,
        isFetching: false,
        items: categories
      };

    case types.FETCH_CATEGORIES_FAILURE:
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