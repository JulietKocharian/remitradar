import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://emoscent.me/'
});

export { $host };