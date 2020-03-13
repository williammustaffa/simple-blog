import types from "store/types";

export default function userCheckSessionSuccess(payload) {
  return {
    type: types.USER_CHECK_SESSION_SUCCESS,
    payload,
  };
};