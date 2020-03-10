import types from "../../types";

export default function fetchPostsFailure(payload) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload,
  };
};