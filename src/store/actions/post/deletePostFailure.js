import types from "store/types";

export default function deletePostFailure(payload) {
  return {
    type: types.DELETE_POST_FAILURE,
    payload,
  };
};