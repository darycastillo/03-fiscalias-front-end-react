import { Suspense } from 'react';
import Provider from 'react-redux/es/components/Provider';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { AbilityProvider } from './context/permissions/AbilityContext';
import CustomTheme from '@components/theme/CustomTheme';
import { LoadingPage } from '@components/routerComponents/Navigation';
import store from './store';
import { useRouter } from '@hooks';

const App = () => {
  const { mainNavigation } = useRouter();
  const navigation = useRoutes(mainNavigation);

  return (
    <Provider store={store}>
      <AbilityProvider>
        <CustomTheme>{navigation}</CustomTheme>
      </AbilityProvider>
    </Provider>
  );
};

const AppWithRouter = () => (
  <Suspense fallback={<LoadingPage />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
);

export default AppWithRouter;
