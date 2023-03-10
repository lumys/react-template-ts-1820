import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import { CustomDataRouteObject } from '@c-types/common';
import AppBar from '@components/organisms/AppBar';
import MiniDrawer from '@components/organisms/MiniDrawer';

const drawerWidth = 240;

interface TemplateProps {
  routes: CustomDataRouteObject[];
}

const Template = ({ routes }: TemplateProps) => {
  const theme = useTheme();

  const [isOpen, setOpen] = useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        open={isOpen}
        onOpen={() => setOpen(true)}
        drawerWidth={drawerWidth}
      />

      <MiniDrawer
        open={isOpen}
        onClose={() => setOpen(false)}
        routes={routes}
        drawerWidth={drawerWidth}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Box sx={{ ...theme.mixins.toolbar }} />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Template;
