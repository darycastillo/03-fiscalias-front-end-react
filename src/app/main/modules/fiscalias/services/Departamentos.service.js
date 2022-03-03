import axios from 'axios';
import { URL_NODE_SERVICES } from './config';

export const get = () => {
  return axios
    .get(`${URL_NODE_SERVICES}/api/departamentos`)
    .then((departamentos) => {
      return departamentos.data.data.map((departamento) => ({
        value: departamento.Id,
        label: departamento.Nombre,
      }));
    })
    .catch((err) => {
      console.error(err);
    });
};
