import types from "../../types";

export default function fetchProfile(payload) {
  return {
    type: types.FETCH_PROFILE,
    payload,
  };
};