import types from "store/types";

export default function updatePostSuccess(payload) {
  return {
    type: types.UPDATE_POST_SUCCESS,
    payload,
  };
};