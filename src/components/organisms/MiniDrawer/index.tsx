import {
  CSSObject,
  Drawer as MuiDrawer,
  DrawerProps,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Theme,
  useTheme,
} from '@mui/material';
import { CustomDataRouteObject } from '@c-types/common';
import React, { EventHandler, MouseEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const openedMixin = (theme: Theme, width: number): CSSObject => ({
  width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<DrawerProps & { width: number }>(({ theme, open, width }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  overflowX: 'hidden',
  ...(open && {
    ...openedMixin(theme, width),
    '& .MuiDrawer-paper': openedMixin(theme, width),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

interface MiniDrawerProps {
  open: boolean;
  onClose: EventHandler<MouseEvent<HTMLElement>>;
  routes: CustomDataRouteObject[];
  deepLevel?: number;
  drawerWidth?: number;
}

const Component = ({
  open,
  onClose,
  routes,
  deepLevel = 2,
  drawerWidth = 240,
}: MiniDrawerProps) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const renderList = useCallback(
    (list: CustomDataRouteObject[], level = 0) => {
      return (
        <List>
          {list.map((value) => {
            const { id, path, headerOptions, children, icon } = value;
            const { headerShown = true } = headerOptions || {};
            const title = headerOptions?.title || id;

            if (!headerShown) return null;

            if (level < deepLevel && children) {
              return (
                <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                  {title}
                  {renderList(children, level + 1)}
                </ListItem>
              );
            }

            if (!path) {
              return null;
            }

            return (
              <ListItem key={id} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => navigate(path)}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  {icon ? (
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                  ) : undefined}
                  <ListItemText
                    primary={title}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      );
    },
    [deepLevel, navigate, open],
  );

  return (
    <Drawer variant="permanent" open={open} width={drawerWidth}>
      <DrawerHeader>
        <IconButton onClick={onClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>

      {renderList(routes)}
    </Drawer>
  );
};

export default Component;
