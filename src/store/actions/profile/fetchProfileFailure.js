import types from "../../types";

export default function fetchProfileFailure(payload) {
  return {
    type: types.FETCH_PROFILE_FAILURE,
    payload,
  };
};