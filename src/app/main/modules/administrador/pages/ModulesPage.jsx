import GeneralContainer from '@components/generalContainer/GeneralContainer';
import PrintIcon from '@mui/icons-material/Print';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import ActionsTab from '../components/ActionsTab';
import { useParams, useSearchParams } from 'react-router-dom';

const ModulesPage = () => {
  const params = useParams();
  let [searchParams, setSearchParams] = useSearchParams();

  console.log({ params });
  console.log({ searchParams });
  return (
    <GeneralContainer
      title="Modulos"
      subtitle="Subtitulo de Modulos"
      actions={[
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
      ]}
      buttonProps={{
        onClick: () => console.log('perro'),
        text: 'Guardar' /* loading: true */,
      }}
      container={<ActionsTab />}
    />
  );
};
export default ModulesPage;
