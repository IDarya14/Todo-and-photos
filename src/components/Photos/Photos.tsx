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

export const Photos: React.FC = () => {
  const [id, setId] = useState<number>();
  const [currentId, setCurrentId] = useState<number>();
  const [err, setErr] = useState<string>('');
  const [photoList, setPhotoList] = useState<IItem[] | undefined>();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (+e.target.value > 100) {
      return setErr('id cannot be greater than 100');
    } else {
      setErr('');
    }
    setId(+e.target.value);
  };

  const handalGetPhotos = (): void => {
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
