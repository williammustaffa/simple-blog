import types from "store/types";

export default function togglePostLikeFailure(payload) {
  return {
    type: types.TOGGLE_POST_LIKE_FAILURE,
    payload,
  };
};