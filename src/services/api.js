import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '32030919-a17cb64bb2c31a2245fda23b8';

export const getResponse = async (searchQuery, page) => {
  const response = await axios.get(
    `/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  if (response.data.hits.length === 0) {
    throw new Error('error');
  }
  return response.data.hits;
};
