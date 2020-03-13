import types from "store/types";

export default function deletePostSuccess(payload) {
  return {
    type: types.DELETE_POST_SUCCESS,
    payload,
  };
};