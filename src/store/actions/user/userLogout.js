import types from "store/types";

export default function userLogout(payload) {
  return {
    type: types.USER_LOGOUT,
    payload,
  };
};