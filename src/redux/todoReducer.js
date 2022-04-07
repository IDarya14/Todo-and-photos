import { ADD_TODO, CHANGE_TODO } from './constantTypes';

const arr = localStorage.getItem('todos');
const array = JSON.parse(arr);

const initialState = {
  todos: array ? array : [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case CHANGE_TODO:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
