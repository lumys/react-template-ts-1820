import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import router from '~/routes/rootRouter';
import { ThemeProvider } from '@mui/material';
import theme from '@styles/theme';

const App = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
