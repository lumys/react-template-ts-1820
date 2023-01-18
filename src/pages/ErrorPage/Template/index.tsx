import React from 'react';

interface ErrorResponseProps {
  title?: string;
  message?: string;
  detailMessage?: string;
}

const Template = ({
  title = 'Oops!',
  message = 'Sorry, an unexpected error has occurred.',
  detailMessage,
}: ErrorResponseProps) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
      {detailMessage ? (
        <p>
          <i>{detailMessage}</i>
        </p>
      ) : null}
    </div>
  );
};

export default Template;
