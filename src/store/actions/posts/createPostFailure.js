import types from "store/types";

export default function createPostFailure(payload) {
  return {
    type: types.CREATE_POST_FAILURE,
    payload,
  };
};