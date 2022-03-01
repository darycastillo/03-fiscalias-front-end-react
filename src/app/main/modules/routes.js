import { Navigate } from 'react-router-dom';
import adminRoutes from './administrador/routes';
import dashboardRoutes from './dashboard/routes';
import productsRoutes from './products/routes';

export default [
  ...adminRoutes,
  ...dashboardRoutes,
  ...productsRoutes,
  { path: '*', to: 'dashboard', element: Navigate },
];
