import types from "store/types";

export default function addPostComment(payload) {
  return {
    type: types.ADD_POST_COMMENT,
    payload,
  };
};