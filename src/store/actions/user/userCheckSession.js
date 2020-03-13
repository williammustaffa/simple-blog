import types from "store/types";

export default function userCheckSession(payload) {
  return {
    type: types.USER_CHECK_SESSION,
    payload,
  };
};