import types from "store/types";

export default function createProfileFailure(payload) {
  return {
    type: types.CREATE_PROFILE_FAILURE,
    payload,
  };
};