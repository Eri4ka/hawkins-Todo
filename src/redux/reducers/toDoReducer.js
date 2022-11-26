const initialState = {
  todos: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case 'TOGGLE_FAVORITE':
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, favorite: !item.favorite };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export default toDoReducer;
