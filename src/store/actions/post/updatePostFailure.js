import types from "../../types";

export default function updatePostFailure(payload) {
  return {
    type: types.UPDATE_POST_FAILURE,
    payload,
  };
};