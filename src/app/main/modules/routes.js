import { Navigate } from 'react-router-dom';
import fiscaliasRoutes from './fiscalias/routes';

export default [
  ...fiscaliasRoutes,
  { path: '*', to: 'fiscalias', element: Navigate },
];
