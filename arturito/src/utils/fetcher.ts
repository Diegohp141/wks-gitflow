import axios from 'axios';

// Possible alternative: 'https://swapi.dev/api'
//const baseURL = 'https://www.swapi.it/api';
const baseURL = 'https://swapi.dev/api';
const dataSpaceships = 'https://swapi.dev/api/starships';

export const swGet = (url: string) =>
  axios.get(url, { baseURL }).then((res) => res.data);
