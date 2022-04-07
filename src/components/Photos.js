import React, { useState } from 'react';
import { getPhotos } from '../crud/crud';
import './photos.scss';

// interface IPhotoList {
  
//   title: string;
//   url: string;
// }

export const Photos = () => {
  const [id, setId] = useState<number>();
  const [currentId, setCurrentId] = useState<number>(null);
  const [err, setErr] = useState<string>('');
  const [photoList, setPhotoList] = useState<IPhotoList | undefined>();

  const chengeHendler = (e) => {
    if (e.target.value > 100) {
      return setErr('Число не может быть больше 100');
    } else {
      setErr('');
    }
    setId(e.target.value);
  };

  console.log('id', id);
  console.log('currentId', currentId);

  const hendalGetPhotos = () => {
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
                  onChange={chengeHendler}
                  className="photos__input"
                />
                <div className="photos__err">{err ? err : ''}</div>
              </div>
              <div
                className={`photos__button ${
                  currentId === id ? '_disable' : ''
                }`}
                onClick={hendalGetPhotos}
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
