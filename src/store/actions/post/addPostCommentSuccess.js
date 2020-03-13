import types from "store/types";

export default function addPostCommentSuccess(payload) {
  return {
    type: types.ADD_POST_COMMENT_SUCCESS,
    payload,
  };
};