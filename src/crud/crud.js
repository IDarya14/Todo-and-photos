import axios from 'axios';

export const getPhotos = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`);
};
