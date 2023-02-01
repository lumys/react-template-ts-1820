import React from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import Template from '@pages/AboutPage/Template';
import InfoIcon from '@mui/icons-material/Info';

const Page = () => {
  return <Template />;
};

export const aboutPage: CustomDataRouteObject = {
  id: 'about',
  path: '/about',
  icon: <InfoIcon />,
  element: <Page />,
  children: undefined,
  loader: undefined,
};

export default Page;
