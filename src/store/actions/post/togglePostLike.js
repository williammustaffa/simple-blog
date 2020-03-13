import types from "store/types";

export default function togglePostLike(payload) {
  return {
    type: types.TOGGLE_POST_LIKE,
    payload,
  };
};