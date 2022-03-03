import { lazy } from 'react';
import FormFiscaliasPage from './pages/FormFiscaliaPage';

const FiscaliasPage = lazy(() =>
  import(/* webpackChunkName: "FiscaliasPage" */ './pages/FiscaliasPage')
);

export default [
  {
    path: 'fiscalias',
    children: [
      { index: true, element: FiscaliasPage },
      {
        path: 'formulario',
        children: [
          { index: true, element: FormFiscaliasPage },
          { path: ':id', element: FormFiscaliasPage },
        ],
      },
    ],
  },
];
