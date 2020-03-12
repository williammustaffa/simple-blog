import types from "../../types";

export default function updatePost(payload) {
  return {
    type: types.UPDATE_POST,
    payload,
  };
};