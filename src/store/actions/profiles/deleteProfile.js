import types from "store/types";

export default function deleteProfile(payload) {
  return {
    type: types.DELETE_PROFILE,
    payload,
  };
};