import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@pages/AboutPage/Template';

const Page = () => {
  return <Template />;
};

export const aboutPage: CustomDataRouteObject = {
  id: 'about',
  path: '/about',
  element: <Page />,
  children: undefined,
  loader: undefined,
};

export default Page;
