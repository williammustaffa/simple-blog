import types from "../../types";

export default function fetchCategoriesSuccess(payload) {
  return {
    type: types.FETCH_CATEGORIES_SUCCESS,
    payload,
  };
};