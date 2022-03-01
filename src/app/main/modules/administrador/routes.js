import { lazy } from 'react';

const AdminPage = lazy(() =>
  import(/* webpackChunkName: "AdminPage" */ './pages/AdminPage')
);
const ModulesPage = lazy(() =>
  import(/* webpackChunkName: "ModulesPage" */ './pages/ModulesPage')
);

export default [
  {
    path: 'admin',
    children: [
      { index: true, element: AdminPage },
      {
        path: 'modulos',
        children: [
          { index: true, element: ModulesPage },
          { path: ':id', element: ModulesPage },
          { path: ':idlugar/:idPosition/:idPerro', element: ModulesPage },
          { path: 'panito/:idHarina', element: ModulesPage },
        ],
      },
    ],
  },
];
