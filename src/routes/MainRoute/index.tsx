import React from 'react';
import { homePage } from '~/pages/HomePage';
import { aboutPage } from '~/pages/AboutPage';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@routes/MainRoute/Template';

const routes = [homePage, aboutPage];

const mainRoute: CustomDataRouteObject = {
  id: 'main',
  path: '/',
  element: <Template routes={routes} />,
  children: routes,
  loader: undefined,
};

export default mainRoute;
