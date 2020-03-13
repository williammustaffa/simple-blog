import types from "store/types";

export default function createProfile(payload) {
  return {
    type: types.CREATE_PROFILE,
    payload,
  };
};