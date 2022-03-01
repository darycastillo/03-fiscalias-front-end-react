import ApsTable from '@components/table/ApsTable';
import React from 'react';
//import ApsForm from '@components/ApsForm';
//import useFormAction from '../hooks/useFormAction';

const FormFiscalia = () => {
  //const { fields, formik /* formikSubmit */ } = useFormAction();

  const columns = [
    { id: 'nombre', label: 'Fiscalía', minWidth: 170 },
    { id: 'direccion', label: 'Dirección', minWidth: 100 },
    {
      id: 'estado',
      label: 'Estado',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'acciones',
      label: 'Acciones',
      minWidth: 170,
      align: 'right',
    },
  ];

  const fiscalias = [
    {
      nombre: 'Fiscalía de la mujer',
      direccion: 'Ciudad de Guatemala',
      estado: 1,
    },
  ];

  const rows = fiscalias.map((fiscalia) => ({
    nombre: fiscalia.nombre,
    direccion: fiscalia.direccion,
    estado: fiscalia.estado === 1 ? 'ACTIVA' : 'INACTIVA',
    acciones: () => handleEditar(fiscalia),
  }));

  return (
    <ApsTable
      rows={rows}
      columns={columns}
    /> /*  <ApsForm title="Datos principales" fields={fields} formik={formik} /> */
  );
};

export default React.memo(FormFiscalia);
