import { lazy } from 'react';

const DashboardPage = lazy(() =>
  import(/* webpackChunkName: "AdminPage" */ './pages/DashboardPage')
);

export default [
  {
    path: 'dashboard',
    element: DashboardPage,
  },
];
