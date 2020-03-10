import types from "../../types";

export default function createPost(payload) {
  return {
    type: types.CREATE_POST,
    payload,
  };
};