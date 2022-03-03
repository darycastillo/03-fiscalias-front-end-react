import axios from 'axios';
import { URL_NODE_SERVICES } from './config';

export const get = () => {
  return axios
    .get(`${URL_NODE_SERVICES}/api/municipios`)
    .then((municipios) => {
      return municipios.data.data.map((municipios) => ({
        value: municipios.Id,
        label: municipios.Nombre,
      }));
    })
    .catch((err) => {
      console.error(err);
    });
};
