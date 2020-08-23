import axios from 'axios';

// const key = '8KJEqAS-9tjyAkD1pSey8lle';
const key = '';

const baseURL = 'https://www.googleapis.com/youtube/v3';

const params = {
  part: 'snnipet',
  maxResults: 5,
  key,
};

const api = axios.create({
  baseURL,
  params,
});

export default api;
