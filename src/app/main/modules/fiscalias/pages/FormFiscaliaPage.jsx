import Layout from '@components/Layout';
import ApsForm from '@components/ApsForm';
import useFormFiscalia from '../hooks/useFiscaliaForm';

const FormFiscaliasPage = () => {
  const { fields, formik, formikSubmit, loading, titleHeader, navigate } =
    useFormFiscalia();

  return (
    <Layout
      title={titleHeader}
      subtitle="Complete la informacion solicitada"
      buttonProps={{
        text: 'Guardar',
        onClick: () => formikSubmit(),
        disabled: !formik.isValid,
        loading: loading,
      }}
      cancelProps={{
        onClick: () => navigate('main/fiscalias'),
      }}
      container={
        <ApsForm title="Datos principales" fields={fields} formik={formik} />
      }
    />
  );
};
export default FormFiscaliasPage;
