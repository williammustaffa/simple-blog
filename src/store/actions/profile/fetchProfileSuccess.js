import types from "../../types";

export default function fetchProfileSuccess(payload) {
  return {
    type: types.FETCH_PROFILE_SUCESS,
    payload,
  };
};