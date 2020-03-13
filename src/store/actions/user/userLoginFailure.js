import types from "store/types";

export default function userLoginFailure(payload) {
  return {
    type: types.USER_LOGIN_FAILURE,
    payload,
  };
};