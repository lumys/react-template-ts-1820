import {
  AppBar as MuiAppBar,
  IconButton,
  styled,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { EventHandler, MouseEvent } from 'react';
import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';

interface AppBarProps extends MuiAppBarProps {
  open: boolean | true;
  drawerWidth?: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Component = ({
  open,
  onOpen,
  drawerWidth = 240,
}: AppBarProps & { onOpen: EventHandler<MouseEvent<HTMLElement>> }) => {
  return (
    <AppBar position="fixed" open={open} drawerWidth={drawerWidth}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ marginRight: 5, ...(open && { display: 'none' }) }}
          onClick={onOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          title
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Component;
