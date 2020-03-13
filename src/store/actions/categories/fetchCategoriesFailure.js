import types from "store/types";

export default function fetchCategoriesFailure(payload) {
  return {
    type: types.FETCH_CATEGORIES_FAILURE,
    payload,
  };
};