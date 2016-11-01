const INIT_STATE = {
  listOfItems: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return { ...state, listOfItems: [...state.listOfItems, action.payload] };
    default:
      return state;
  }
};
