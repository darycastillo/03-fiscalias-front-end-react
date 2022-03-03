import { useLayoutEffect, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useFormikFields } from '@hooks';
import { FieldValidations } from '@utils';
import { Departamentos, Fiscalias, Municipios } from '../services';

const useFiscaliaForm = () => {
  const navigate = useNavigate();
  const { state: fiscalia } = useLocation();
  const [catalogs, setCatalogs] = useState({
    municipios: [],
    departamentos: [],
  });
  const [loading, setLoading] = useState(false);
  const titleHeader = fiscalia ? 'Editar Fiscalia' : 'Crear Fiscalia';
  const fields = [
    {
      id: '1',
      label: 'Nombre de la fiscalía',
      name: 'nombre',
      gridItem: true,
      required: true,
      validations: FieldValidations.required,
    },
    {
      id: '2',
      label: 'Teléfono',
      name: 'telefono',
      gridItem: true,
      required: true,
      inputProps: { minLength: 8 },
      validations: FieldValidations.numberInger({ required: true }),
    },
    {
      id: '3',
      label: 'Departamento',
      name: 'departamento_id',
      gridItem: true,
      select: true,
      options: catalogs.departamentos,
      intialValue: '-1',
      validations: FieldValidations.requiredSelect,
    },
    {
      id: '4',
      label: 'Municipio',
      name: 'municipio_id',
      gridItem: true,
      select: true,
      options: catalogs.municipios,
      intialValue: '-1',
      validations: FieldValidations.requiredSelect,
    },
    {
      id: '5',
      label: 'Indicaciones',
      name: 'descripcion',
      gridItem: true,
      multiline: true,
      rows: 4,
      gridProps: { md: 12 },
    },
  ];
  const formik = useFormikFields({ fields });

  useLayoutEffect(() => {
    Departamentos.get().then((departamentos) => {
      setCatalogs((prev) => ({ ...prev, departamentos }));
    });
    Municipios.get().then((municipios) => {
      setCatalogs((prev) => ({ ...prev, municipios }));
    });
  }, []);

  useEffect(() => {
    if (fiscalia) {
      formik.setValues({
        id: fiscalia.Id,
        nombre: fiscalia.Nombre,
        telefono: fiscalia.Telefono,
        departamento_id: fiscalia.Departamento_id,
        municipio_id: fiscalia.Municipio_id,
        descripcion: fiscalia.Descripcion,
      });
    }
  }, [fiscalia]);

  const formikSubmit = async () => {
    setLoading(true);
    if (fiscalia) {
      await Fiscalias.update(formik.values);
    } else {
      await Fiscalias.post(formik.values);
    }
    setLoading(false);
    navigate('main/fiscalias');
  };

  return { fields, formik, formikSubmit, loading, titleHeader, navigate };
};

export default useFiscaliaForm;
