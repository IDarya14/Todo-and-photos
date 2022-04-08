import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeTodo } from '../../redux/action';
import { useNavigate } from 'react-router';
import { useTypeSelector } from '../customHooks/useTypeSelector';
import './todos.scss';

interface ITodos {
  id: number;
  value: string;
  completed: boolean;
}

export const Todos: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const [sort, setSort] = useState<number>(1);
  const dispatch = useDispatch();
  const todos = useTypeSelector((state) => state.todoReducer.todos);
  const navigate = useNavigate();

<<<<<<< HEAD:src/components/Todos.tsx
  const chengeHendler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  const submitHendler = (e: React.FormEvent): void => {
=======
  const changeHendler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
>>>>>>> 181d1839b9f9651932a796ac9faee0795c0d9027:src/components/Todos/Todos.js
    e.preventDefault();
    const newTodo: ITodos = {
      value: value,
      completed: false,
      id: todos.length + 1,
    };
    dispatch(addTodo(newTodo));
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setValue('');
  };

<<<<<<< HEAD:src/components/Todos.tsx
  const chekboxHendler = (e: React.ChangeEvent, id: number): void => {
=======
  const chekboxHandler = (e, id) => {
>>>>>>> 181d1839b9f9651932a796ac9faee0795c0d9027:src/components/Todos/Todos.js
    e.stopPropagation();
    const index: number = todos.findIndex((elem: ITodos) => elem.id === id);
    const arr: ITodos[] = [...todos];
    if (arr[index].completed === false) {
      arr[index].completed = true;
      dispatch(changeTodo(arr));
      localStorage.setItem('todos', JSON.stringify(arr));
    } else {
      arr[index].completed = false;
      dispatch(changeTodo(arr));
      localStorage.setItem('todos', JSON.stringify(arr));
    }
  };

  const deleteBtn = (e: React.MouseEvent, id: number): void => {
    e.stopPropagation();
    const index: number = todos.findIndex((elem: ITodos) => elem.id === id);
    const arr: ITodos[] = [...todos];
    arr.splice(index, 1);
    dispatch(changeTodo(arr));
    localStorage.setItem('todos', JSON.stringify(arr));
  };

  const sortTodo = (sort: number): ITodos[] => {
    switch (sort) {
      case 1:
        return [...todos].sort((a: any, b: any) => a.completed - b.completed);
      case 2:
        return todos.filter((elem: ITodos) => elem.completed === false);
      case 3:
        return todos.filter((elem: ITodos) => elem.completed === true);
      default:
        return todos;
    }
  };

  return (
    <>
      <div className="todos">
        <div className="todos__container">
          <form className="form" onSubmit={submitHandler}>
            <input
              type="text"
              className="form__input"
              placeholder="Введите название заметки..."
              value={value}
              onChange={changeHendler}
            />
            <input className="form__button" type="submit" value="Submit" />
          </form>
          <div className="sort">
            <div
              className={`sort__item ${sort === 1 ? '_active' : ''}`}
              onClick={() => setSort(1)}
            >
              All
            </div>
            <div
              className={`sort__item ${sort === 2 ? '_active' : ''}`}
              onClick={() => setSort(2)}
            >
              Todo
            </div>
            <div
              className={`sort__item ${sort === 3 ? '_active' : ''}`}
              onClick={() => setSort(3)}
            >
              Done
            </div>
          </div>
          <div className="todo">
            <ul className="todo__list">
<<<<<<< HEAD:src/components/Todos.tsx
              {sortTodo(sort).map((elem: ITodos) => {
=======
              {sortTodo(sort).map((elem, index) => {
>>>>>>> 181d1839b9f9651932a796ac9faee0795c0d9027:src/components/Todos/Todos.js
                return (
                  <div
                    className={`todo__item ${
                      elem.completed ? '_completed' : ''
                    }`}
                    key={index}
                    onClick={() => navigate(`/todos/${elem.id}`)}
                  >
                    <div className="todo__wrapper">
                      <div className="todo__count">{index + 1})</div>
                      <div
                        className={`todo__value ${
                          elem.completed ? '_completed' : ''
                        }`}
                      >
                        {elem.value}
                      </div>
                    </div>
                    <div className="todo__wrap">
                      <input
                        type="checkbox"
                        checked={elem.completed}
                        className="todo__chkbox"
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) => chekboxHandler(e, elem.id)}
                      />
                      <div
                        className="todo__delete"
                        onClick={(e) => deleteBtn(e, elem.id)}
                      >
                        &#10006;
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
