import React, { useState } from 'react';
import { getPhotos } from '../../crud/crud';
import './photos.scss';

interface IItem {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

<<<<<<< HEAD:src/components/Photos.tsx
export const Photos: React.FC = () => {
  const [id, setId] = useState<number>();
  const [currentId, setCurrentId] = useState<number>();
  const [err, setErr] = useState<string>('');
  const [photoList, setPhotoList] = useState<IItem[] | undefined>();

  const chengeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (+e.target.value > 100) {
      return setErr('Число не может быть больше 100');
=======
  const changeHandler = (e) => {
    if (e.target.value > 100) {
      return setErr('is cannot be greater than 100');
>>>>>>> 181d1839b9f9651932a796ac9faee0795c0d9027:src/components/Photos/Photos.js
    } else {
      setErr('');
    }
    setId(+e.target.value);
  };

<<<<<<< HEAD:src/components/Photos.tsx
  const hendalGetPhotos = (): void => {
=======
  const handalGetPhotos = () => {
>>>>>>> 181d1839b9f9651932a796ac9faee0795c0d9027:src/components/Photos/Photos.js
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
<<<<<<< HEAD:src/components/Photos.tsx
                  onChange={chengeHandler}
=======
                  onChange={changeHandler}
>>>>>>> 181d1839b9f9651932a796ac9faee0795c0d9027:src/components/Photos/Photos.js
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
