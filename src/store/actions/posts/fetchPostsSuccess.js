import types from "../../types";

export default function fetchPostsSuccess(payload) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload,
  };
};