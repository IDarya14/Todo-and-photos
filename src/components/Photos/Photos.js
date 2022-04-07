import React, { useState } from 'react';
import { getPhotos } from '../../crud/crud';
import './photos.scss';

export const Photos = () => {
  const [id, setId] = useState();
  const [currentId, setCurrentId] = useState(null);
  const [err, setErr] = useState('');
  const [photoList, setPhotoList] = useState();

  const changeHandler = (e) => {
    if (e.target.value > 100) {
      return setErr('is cannot be greater than 100');
    } else {
      setErr('');
    }
    setId(e.target.value);
  };

  const handalGetPhotos = () => {
    if (currentId === id) return;
    getPhotos(id).then((res) => setPhotoList(res.data));
    setCurrentId(id);
  };
  return (
    <>
      <div className="photos">
        <div className="photos__container">
          <div className="photos__wrap">
            <div className="photos__text">Введите число от 1 до 100</div>
            <div className="photos__item">
              <div>
                <input
                  type="number"
                  value={id}
                  onChange={changeHandler}
                  className="photos__input"
                />
                <div className="photos__err">{err ? err : ''}</div>
              </div>
              <div
                className={`photos__button ${
                  currentId === id ? '_disable' : ''
                }`}
                onClick={handalGetPhotos}
              >
                Get Photos
              </div>
            </div>
          </div>
          <div className="photos-list">
            {photoList?.map((elem) => {
              return (
                <>
                  <div className="photo-list__item">
                    <div className="photo-list__title">{elem.title}</div>
                    <img src={elem.url} className="photo-list__img" />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
