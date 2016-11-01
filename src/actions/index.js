export function addToList(item) {
  let count = 0;
  return {
    type: 'ADD_TO_LIST',
    payload: {
      text: item,
      completed: false,
      key: count++,
    },
  };
}
