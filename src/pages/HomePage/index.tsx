import React from 'react';
import { DataRouteObject } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Hello world</p>
    </div>
  );
};

export const homePage: DataRouteObject = {
  id: 'home',
  path: '/',
  element: <Page />,
  children: undefined,
  loader: undefined,
};

export default Page;
