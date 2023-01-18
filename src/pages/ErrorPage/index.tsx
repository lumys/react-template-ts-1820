import React from 'react';
import { useRouteError } from 'react-router-dom';
import { RouteErrorResponseType } from '@c-types/common';
import Template from '@pages/ErrorPage/Template';

const Page = () => {
  const { statusText }: RouteErrorResponseType = useRouteError();

  return <Template detailMessage={statusText} />;
};

export default Page;
