import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@pages/HomePage/Template';

const loader = async () => {
  return 'User';
};

const Page = () => {
  return <Template />;
};

export const homePage: CustomDataRouteObject = {
  id: 'home',
  path: '/',
  element: <Page />,
  loader,
};

export default Page;
