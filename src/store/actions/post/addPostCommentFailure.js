import types from "store/types";

export default function addPostCommentFailure(payload) {
  return {
    type: types.ADD_POST_COMMENT_FAILURE,
    payload,
  };
};