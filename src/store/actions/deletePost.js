import types from '../types';

export default function deletePost(payload) {
  return {
    type: types.DELETE_POST,
    payload,
  };
};