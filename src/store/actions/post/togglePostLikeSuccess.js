import types from "store/types";

export default function togglePostLikeSuccess(payload) {
  return {
    type: types.TOGGLE_POST_LIKE_SUCCESS,
    payload,
  };
};