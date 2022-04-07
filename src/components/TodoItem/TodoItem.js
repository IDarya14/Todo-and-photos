import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { changeTodo } from '../../redux/action';
import './todoItem.scss';

export const TodoItem = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoReducer.todos);
  const { id } = useParams();
  const todo = todos.find((elem) => +elem.id === +id);
  console.log(id);

  const handalChange = (e) => {
    setValue(e.target.value);
  };

  const clickHandler = () => {
    const index = todos.findIndex((elem) => +elem.id === +id);
    const arr = [...todos];
    arr[index].value = value;
    dispatch(changeTodo(arr));
  };

  return (
    <>
      <div className="one-todo">
        <div className="one-todo__container">
          <div className="one-todo__back" onClick={() => navigate(-1)}>
            &#8592;
          </div>
          <div className="one-todo__card">
            <div className="one-todo__item">
              <div className="one-todo__text">Задание:</div>
              <div className="one-todo__value">{todo.value}</div>
            </div>
            <div className="one-todo__item-edit">
              <input
                type="text"
                className="one-todo__input"
                value={value}
                onChange={(e) => handalChange(e)}
              />
              <div className="one-todo__button" onClick={clickHandler}>
                Edit
              </div>
            </div>
          </div>
          <div className="one-todo__item">
            <div className="one-todo__text">Статус выполнения: </div>{' '}
            <div className="one-todo__value">
              {todo.completed ? 'Выполнено' : 'Не выполнено'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
