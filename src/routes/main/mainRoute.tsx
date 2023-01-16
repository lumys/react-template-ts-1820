import React from 'react';
import { DataRouteObject, Outlet } from 'react-router-dom';
import { homePage } from '~/pages/HomePage';
import { aboutPage } from '~/pages/AboutPage';

const Template = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const mainRoute: DataRouteObject = {
  id: 'main',
  path: '/',
  element: <Template />,
  children: [homePage, aboutPage],
  loader: undefined,
};

export default mainRoute;
