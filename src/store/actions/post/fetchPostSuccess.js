import types from "../../types";

export default function fetchPost(payload) {
  return {
    type: types.FETCH_POST_SUCCESS,
    payload,
  };
};