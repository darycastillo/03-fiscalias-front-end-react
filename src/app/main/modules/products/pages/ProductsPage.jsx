import GeneralContainer from '@components/generalContainer/GeneralContainer';
import PrintIcon from '@mui/icons-material/Print';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FormAction from '../components/FormAction';

const ProductsPage = () => {
  return (
    <GeneralContainer
      title="Fiscalías"
      subtitle="Fiscalías de todo el país"
      /* actions={[
        {
          id: 1,
          icon: <PrintIcon fontSize="small" />,
          title: 'Imprimir',
          onClick: () => console.log('Imprimir'),
        },
        {
          id: 2,
          icon: <CloudDownloadIcon fontSize="small" />,
          title: 'Descargar',
          onClick: () => console.log('Descargar'),
        },
      ]} */
      buttonProps={{
        onClick: () => console.log('perro'),
        text: 'Guardar' /* loading: true */,
      }}
      container={<FormAction />}
    />
  );
};
export default ProductsPage;
