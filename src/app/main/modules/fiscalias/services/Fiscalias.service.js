import axios from 'axios';

export const post = (body = {}) => {
  return axios
    .post('http://localhost:8080/Fiscalias/api/fiscalias', body)
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};

export const get = () => {
  return axios
    .get('http://localhost:4000/api/fiscalias')
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
    .put('http://localhost:8080/Fiscalias/api/fiscalias', body)
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
    .put(`http://localhost:8080/Fiscalias/api/fiscalias/${id}`, {})
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.error(err);
    });
};
