import { lazy } from 'react';

const ProductsPage = lazy(() =>
  import(/* webpackChunkName: "ProductsPage" */ './pages/FiscaliasPage')
);

export default [
  {
    path: 'fiscalias',
    element: ProductsPage,
  },
];
