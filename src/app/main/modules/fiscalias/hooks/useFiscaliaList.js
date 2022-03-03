import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fiscalias } from '../services';

const useFiscaliaList = () => {
  const navigate = useNavigate();
  const [fiscalias, setFiscalias] = useState({ initValue: [], value: [] });
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [fiscaliaSelected, setFiscaliaSelected] = useState();

  useLayoutEffect(() => {
    Fiscalias.get().then((fiscalias) => {
      setFiscalias({ initValue: fiscalias, value: fiscalias });
    });
  }, []);

  const handleEdit = (fiscalia) => {
    navigate(`formulario`, { state: fiscalia });
  };

  const handleDelete = async () => {
    await Fiscalias.deleteF(fiscaliaSelected.id);
    setFiscalias((prev) => ({
      ...prev,
      value: prev.value.filter((fis) => fis.id !== fiscaliaSelected.id),
    }));
    setOpenDeleteModal(false);
  };

  const handleSearch = (value) => {
    if (!value) {
      setFiscalias((prev) => ({ ...prev, value: prev.initValue }));
      return;
    }

    value = value.toLowerCase();
    setFiscalias((prev) => ({
      ...prev,
      value: prev.value.filter(
        ({ nombre, direccion, telefono }) =>
          nombre.toLowerCase().includes(value) |
          direccion.toLowerCase().includes(value) |
          telefono.includes(value)
      ),
    }));
  };

  const columns = [
    { id: 'nombre', label: 'Fiscalía', minWidth: 170 },
    { id: 'direccion', label: 'Dirección', minWidth: 100 },
    {
      id: 'telefono',
      label: 'Teléfono',
      minWidth: 170,
      align: 'center',
    },
    {
      id: 'edit',
      label: 'Acciones',
      minWidth: 170,
      align: 'right',
    },
  ];

  const rows = fiscalias.value?.map((fiscalia) => ({
    ...fiscalia,
    edit: () => handleEdit(fiscalia),
    delete: () => {
      setFiscaliaSelected(fiscalia);
      setOpenDeleteModal(true);
    }
  }));

  return {
    handleSearch,
    rows,
    columns,
    navigate,
    handleDelete,
    openDeleteModal,
    setOpenDeleteModal,
  };
};

export default useFiscaliaList;
