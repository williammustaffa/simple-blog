import types from "store/types";

export default function updatePost(payload, resolve, reject) {
  return {
    type: types.UPDATE_POST,
    payload,
    resolve,
    reject,
  };
};