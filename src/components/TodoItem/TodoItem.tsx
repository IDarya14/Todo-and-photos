import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { changeTodo } from '../../redux/action';
import { useTypeSelector } from '../../customHooks/useTypeSelector';
import './todoItem.scss';

interface ITodos {
  id: number;
  value: string;
  completed: boolean;
}

export const TodoItem: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useTypeSelector((state) => state.todoReducer.todos);
  const { id } = useParams();
  const todo = todos.find((elem: ITodos) => elem?.id + '' === id);

  const handalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (): void => {
    const index: number = todos.findIndex(
      (elem: ITodos) => elem.id + '' === id
    );
    const arr: ITodos[] = [...todos];
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
              <div className="one-todo__value">{todo?.value}</div>
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
              {todo?.completed ? 'Выполнено' : 'Не выполнено'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
