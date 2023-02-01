import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import ErrorPage from '~/pages/ErrorPage';
import mainRoute from '@routes/MainRoute';

const Template = () => {
  return <Outlet />;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Template />,
    errorElement: <ErrorPage />,
    children: [mainRoute],
  },
]);

export default router;
