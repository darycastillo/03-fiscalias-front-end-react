import axios from 'axios';
import { URL_NODE_SERVICES } from './config';

export const get = () => {
  return axios
    .get(`${URL_NODE_SERVICES}/api/municipios`)
    .then((municipios) => {
      return municipios.data.data.map((municipio) => ({
        value: municipio.Id,
        label: municipio.Nombre,
        Departamento_id: municipio.Departamento_id,
      }));
    })
    .catch((err) => {
      console.error(err);
    });
};
