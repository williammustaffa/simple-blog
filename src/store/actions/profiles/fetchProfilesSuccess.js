import types from "../../types";

export default function fetchProfilesSuccess(payload) {
  return {
    type: types.FETCH_PROFILES_SUCCESS,
    payload,
  };
};