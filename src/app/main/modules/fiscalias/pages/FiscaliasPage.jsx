import GeneralContainer from '@components/generalContainer/GeneralContainer';
import FormFiscalia from '../components/FormFiscalia';

const ProductsPage = () => {
  return (
    <GeneralContainer
      title="Fiscalías"
      subtitle="Fiscalías de todo el país"
      container={<FormFiscalia />}
    />
  );
};
export default ProductsPage;
