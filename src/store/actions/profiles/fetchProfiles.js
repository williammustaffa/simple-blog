import types from "store/types";

export default function fetchProfiles(payload) {
  return {
    type: types.FETCH_PROFILES,
    payload,
  };
};