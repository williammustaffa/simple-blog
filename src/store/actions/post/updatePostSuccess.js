import types from "../../types";

export default function updatePostSuccess(payload) {
  return {
    type: types.UPDATE_POST_SUCCESS,
    payload,
  };
};