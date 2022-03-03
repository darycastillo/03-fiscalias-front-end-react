import axios from 'axios';

export const get = () => {
  return axios
    .get('http://localhost:4000/api/departamentos')
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
