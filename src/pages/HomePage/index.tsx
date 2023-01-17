import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';

const Page = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello world</p>
    </div>
  );
};

export const homePage: CustomDataRouteObject = {
  id: 'home',
  path: '/',
  element: <Page />,
  loader: undefined,
};

export default Page;
