

const reducer = (state = [], action) => {
  console.log('PRAIA', state, action);
  switch (action.type) {
    case 'addPost':
      state.push(action.payload);
      return state;
    case 'removePost':
      state = state
        .filter(post => post.id !== action.payload.id);
      return state;

    default:
      return state;
  }
}

export default reducer;