import types from "store/types";

export default function fetchPostsSuccess(payload) {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload,
  };
};