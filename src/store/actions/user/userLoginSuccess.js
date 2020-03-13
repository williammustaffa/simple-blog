import types from "store/types";

export default function userLoginSuccess(payload) {
  return {
    type: types.USER_LOGIN_SUCCESS,
    payload,
  };
};