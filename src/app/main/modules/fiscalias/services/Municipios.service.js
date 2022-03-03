import axios from 'axios';

export const get = () => {
  return axios
    .get('http://localhost:4000/api/municipios')
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
