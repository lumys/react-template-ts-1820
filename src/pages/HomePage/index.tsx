import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@pages/HomePage/Template';
import HomeIcon from '@mui/icons-material/Home';

const loader = async () => {
  return 'User';
};

const Page = () => {
  return <Template />;
};

export const homePage: CustomDataRouteObject = {
  id: 'home',
  path: '/',
  icon: <HomeIcon />,
  element: <Page />,
  loader,
};

export default Page;
