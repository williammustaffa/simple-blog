import types from "../../types";

export default function deleteProfile(payload) {
  return {
    type: types.DELETE_PROFILE,
    payload,
  };
};