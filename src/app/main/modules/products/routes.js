import { lazy } from 'react';

const ProductsPage = lazy(() =>
  import(/* webpackChunkName: "ProductsPage" */ './pages/ProductsPage')
);

export default [
  {
    path: 'productos',
    element: ProductsPage,
  },
];
