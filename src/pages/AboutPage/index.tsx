import React from 'react';
import { DataRouteObject } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Hello world</p>
    </div>
  );
};

export const aboutPage: DataRouteObject = {
  id: 'about',
  path: '/about',
  element: <Page />,
  children: undefined,
  loader: undefined,
};

export default Page;
