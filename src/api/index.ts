import axios from 'axios';

export const dataInstance = axios.create({
  baseURL: 'https://valorant-api.com',
  params: {
    language: 'pt-BR',
    isPlayableCharacter: true,
  },
});
