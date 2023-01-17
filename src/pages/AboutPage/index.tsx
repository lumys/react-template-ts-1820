import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';

const Page = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Hello world</p>
    </div>
  );
};

export const aboutPage: CustomDataRouteObject = {
  id: 'about',
  path: '/about',
  element: <Page />,
  children: undefined,
  loader: undefined,
};

export default Page;
