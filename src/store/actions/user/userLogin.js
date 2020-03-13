import types from "store/types";

export default function userLogin(payload) {
  return {
    type: types.USER_LOGIN,
    payload,
  };
};