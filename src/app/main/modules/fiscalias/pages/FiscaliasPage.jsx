import Layout from '@components/Layout';
import ApsTable from '@components/ApsTable';
import useFiscaliaList from '../hooks/useFiscaliaList';
import Modal from '@components/Modal';

const ProductsPage = () => {
  const {
    handleSearch,
    rows,
    columns,
    navigate,
    openDeleteModal,
    setOpenDeleteModal,
    handleDelete,
  } = useFiscaliaList();

  return (
    <>
      <Modal
        open={openDeleteModal}
        title="Se eliminará el registro, desea continuar?"
        description=""
        handleCancel={() => setOpenDeleteModal(false)}
        titleOk="Eliminar"
        handleOk={() => handleDelete()}
      />
      <Layout
        title="Fiscalías"
        subtitle="Fiscalías de todo el país"
        container={
          <ApsTable
            rows={rows}
            columns={columns}
            fabProps={{
              onClick: () => navigate('formulario', { replace: true }),
            }}
            searchProps={{
              placeholder: 'Buscar Fiscalia',
              onChange: (e) => handleSearch(e),
            }}
          />
        }
      />
    </>
  );
};
export default ProductsPage;
