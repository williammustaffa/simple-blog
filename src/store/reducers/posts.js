

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return state.push(action.payload);

    case 'remove':
      state = state
        .filter(post => post.id !== action.payload.id);
      return state;

    default:
      return state;
  }
}

export default reducer;