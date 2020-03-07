export default function addPost(payload) {
  return {
    type: 'addPost',
    payload,
  };
};