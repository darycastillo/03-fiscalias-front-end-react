import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
// import RequireAuth from '@components/routerComponents/RequireAuth';

const Login = lazy(() =>
  import(/* webpackChunkName: "Login" */ './login/pages/LoginPage')
);
const Main = lazy(() =>
  import(/* webpackChunkName: "Main" */ './modules/main/pages/Main')
);

const routes = [
  {
    path: 'login',
    element: Login,
  },
  {
    path: '/main/*',
    element: Main,
  },
  {
    path: '*',
    to: 'login',
    element: Navigate,
  },
];

export default routes;
