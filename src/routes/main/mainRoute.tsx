import React from 'react';
import { Outlet } from 'react-router-dom';
import { homePage } from '~/pages/HomePage';
import { aboutPage } from '~/pages/AboutPage';
import Header from '~/components/organisms/Header';
import { CustomDataRouteObject } from '@c-types/common';

const routes = [homePage, aboutPage];

const Template = () => {
  return (
    <>
      <Header routes={routes} />
      <Outlet />
    </>
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
