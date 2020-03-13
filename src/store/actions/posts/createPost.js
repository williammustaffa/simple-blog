import types from "store/types";

export default function createPost(payload) {
  return {
    type: types.CREATE_POST,
    payload,
  };
};