import { createBrowserRouter, RouterProvider, Outlet, Navigate } from 'react-router-dom';
import App from '../App';
import Login from '../views/admin/Login';
import DashboardLayout from '../views/admin/Layout';
import SkillsAdmin from '../views/admin/SkillsAdmin';
import ServicesAdmin from '../views/admin/ServicesAdmin';
import PortfoliosAdmin from '../views/admin/PortfoliosAdmin';
import TestimonialsAdmin from '../views/admin/TestimonialsAdmin';

const RequireAuth = () => {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to="/admin/login" replace />;
};

export const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/admin/login', element: <Login /> },
  {
    path: '/admin',
    element: <RequireAuth />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate to="skills" replace /> },
          { path: 'skills', element: <SkillsAdmin /> },
          { path: 'services', element: <ServicesAdmin /> },
          { path: 'portfolios', element: <PortfoliosAdmin /> },
          { path: 'testimonials', element: <TestimonialsAdmin /> },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
