import types from "store/types";

export default function fetchCategories(payload) {
  return {
    type: types.FETCH_CATEGORIES,
    payload,
  };
};