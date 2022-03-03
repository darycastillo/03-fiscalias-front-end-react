import axios from 'axios';
import { URL_NODE_SERVICES, URL_JAVA_SERVICES } from './config';

export const post = (body = {}) => {
  return axios
    .post(`${URL_JAVA_SERVICES}/api/fiscalias`, body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const get = () => {
  return axios
    .get(`${URL_NODE_SERVICES}/api/fiscalias`)
    .then((departamentos) => {
      return departamentos.data.data.map((fiscalia) => ({
        id: fiscalia.Id,
        nombre: fiscalia.Nombre,
        direccion: `${fiscalia.Departamento.Nombre} | ${fiscalia.Municipio.Nombre} | ${fiscalia.Descripcion}`,
        telefono: fiscalia.Telefono,
        ...fiscalia,
      }));
    })
    .catch((err) => {
      console.error(err);
    });
};

export const update = (body = {}) => {
  return axios
    .put(`${URL_JAVA_SERVICES}/api/fiscalias`, body)
    .then((response) => {
      console.log({ response });
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const deleteF = (id) => {
  return axios
    .put(`${URL_JAVA_SERVICES}/api/fiscalias/${id}`, {})
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};
