import React from 'react';
import { useRouteError } from 'react-router-dom';
import { RouteErrorResponseType } from '@c-types/common';

const Page = () => {
  const error: RouteErrorResponseType = useRouteError();

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText}</i>
      </p>
    </div>
  );
};

export default Page;
