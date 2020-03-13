import types from "store/types";

export default function fetchPostsFailure(payload) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload,
  };
};