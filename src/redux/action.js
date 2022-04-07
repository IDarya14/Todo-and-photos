import { ADD_TODO, CHANGE_TODO } from './constantTypes';

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const changeTodo = (arr) => ({
  type: CHANGE_TODO,
  payload: arr,
});
