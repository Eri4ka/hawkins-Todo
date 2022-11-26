export const addTodo = () => {
  return {
    type: 'ADD_TODO',
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    payload: id,
  };
};

export const toggleFavorite = (id) => {
  return {
    type: 'TOGGLE_FAVORITE',
    payload: id,
  };
};
