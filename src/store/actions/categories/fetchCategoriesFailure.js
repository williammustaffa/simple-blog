import types from "../../types";

export default function fetchCategoriesFailure(payload) {
  return {
    type: types.FETCH_CATEGORIES_FAILURE,
    payload,
  };
};