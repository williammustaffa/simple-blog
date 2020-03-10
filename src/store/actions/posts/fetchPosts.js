import types from "../../types";

export default function deletePost(payload) {
  return {
    type: types.FETCH_POSTS,
    payload,
  };
};