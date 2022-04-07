import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, changeTodo } from '../redux/action';
import { useNavigate } from 'react-router';
import './todos.scss';

export const Todos = () => {
  const [value, setValue] = useState('');
  const [sort, setSort] = useState(1);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const navigate = useNavigate();

  const chengeHendler = (e) => {
    setValue(e.target.value);
  };

  const submitHendler = (e) => {
    e.preventDefault();
    const newTodo = {
      value: value,
      completed: false,
      id: todos.length + 1,
    };
    dispatch(addTodo(newTodo));
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setValue('');
  };

  const chekboxHendler = (e, id) => {
    e.stopPropagation();
    const index = todos.findIndex((elem) => elem.id === id);
    const arr = [...todos];
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

  const deleteBtn = (e, id) => {
    e.stopPropagation();
    const index = todos.findIndex((elem) => elem.id === id);
    const arr = [...todos];
    arr.splice(index, 1);
    dispatch(changeTodo(arr));
    localStorage.setItem('todos', JSON.stringify(arr));
  };
  const sortTodo = () => {
    switch (sort) {
      case 1:
        return [...todos].sort((a, b) => a.completed - b.completed);
      case 2:
        return todos.filter((elem) => elem.completed === false);
      case 3:
        return todos.filter((elem) => elem.completed === true);
      default:
        return todos;
    }
  };

  return (
    <>
      <div className="todos">
        <div className="todos__container">
          <form className="form" onSubmit={submitHendler}>
            <input
              type="text"
              className="form__input"
              placeholder="Введите название заметки..."
              value={value}
              onChange={chengeHendler}
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
              {sortTodo(sort).map((elem) => {
                return (
                  <div
                    className={`todo__item ${
                      elem.completed ? '_completed' : ''
                    }`}
                    key={elem.id}
                    onClick={() => navigate(`/todos/${elem.id}`)}
                  >
                    <div className="todo__wrap">
                      <div className="todo__count">{elem.id})</div>
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
                        onChange={(e) => chekboxHendler(e, elem.id)}
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
