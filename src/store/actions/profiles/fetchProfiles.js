import types from "../../types";

export default function fetchProfiles(payload) {
  return {
    type: types.FETCH_PROFILES,
    payload,
  };
};