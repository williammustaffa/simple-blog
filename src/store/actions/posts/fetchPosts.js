import types from "store/types";

export default function deletePost(payload) {
  return {
    type: types.FETCH_POSTS,
    payload,
  };
};