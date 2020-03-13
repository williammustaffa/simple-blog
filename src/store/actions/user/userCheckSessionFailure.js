import types from "store/types";

export default function userCheckSessionFailure(payload) {
  return {
    type: types.USER_CHECK_SESSION_FAILURE,
    payload,
  };
};