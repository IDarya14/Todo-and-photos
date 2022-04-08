import { ADD_TODO, CHANGE_TODO } from './constantTypes';

const arr = localStorage.getItem('todos');
let array: ITodos[] | null = null;
if (typeof arr === 'string') {
  array = JSON.parse(arr);
}

interface ITodos {
  id: number;
  value: string;
  completed: boolean;
}

interface IInitialState {
  todos: ITodos[];
}

interface IAction {
  type: string;
  payload?: any;
}

const initialState: IInitialState = {
  todos: array ? array : [],
};

export default (state = initialState, action: IAction): IInitialState => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case CHANGE_TODO:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};
