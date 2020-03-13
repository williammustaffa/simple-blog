import types from "store/types";

export default function fetchProfilesFailure(payload) {
  return {
    type: types.FETCH_PROFILES_FAILURE,
    payload,
  };
};