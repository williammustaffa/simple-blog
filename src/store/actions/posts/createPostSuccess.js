import types from "store/types";

export default function createPostSuccess(payload) {
  return {
    type: types.CREATE_POST_SUCCESS,
    payload,
  };
};