import React from 'react';
import { Outlet } from 'react-router-dom';
import { homePage } from '~/pages/HomePage';
import { aboutPage } from '~/pages/AboutPage';
import Header from '~/components/Header';
import { CustomDataRouteObject } from '@c-types/common';

const routes = [homePage, aboutPage];

const Template = () => {
  return (
    <div>
      <Header routes={routes} />

      <Outlet />
    </div>
  );
};

const mainRoute: CustomDataRouteObject = {
  id: 'main',
  path: '/',
  element: <Template />,
  children: routes,
  loader: undefined,
};

export default mainRoute;
