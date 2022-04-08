import { ADD_TODO, CHANGE_TODO } from './constantTypes';

interface ITodo {
  id: number;
  value: string;
  completed: boolean;
}

export const addTodo = (todo: ITodo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const changeTodo = (arr: ITodo[]) => ({
  type: CHANGE_TODO,
  payload: arr,
});
