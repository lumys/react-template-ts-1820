import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from '~/routes/rootRouter';

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
