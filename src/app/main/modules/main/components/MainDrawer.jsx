import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Avatar as MuiAvatar,
  Box,
  Drawer as MuiDrawer,
  IconButton,
  Toolbar,
  useMediaQuery,
} from '@mui/material';

import {
  ChevronLeft as ChevronLeftIcon,
  Dashboard as DashboardIcon,
  Menu as MenuIcon,
  ShoppingCart as ShoppingCartIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions';

import ComputerIcon from '@mui/icons-material/Computer';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import GroupIcon from '@mui/icons-material/Group';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ListNav from './ListNav';

const styledIcon = {
  color: (theme) => theme.palette.secondary[50],
};

const boxIconAvatar = {
  '&.MuiBox-root': {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '30px',
  },
};

const Avatar = styled(MuiAvatar)(({ theme, open }) => ({
  '&.MuiAvatar-root': {
    [theme.breakpoints.down('sm')]: {
      width: '48px',
      height: '48px',
      marginBottom: '30px',
      backgroundColor: 'orange',
    },
    [theme.breakpoints.up('sm')]: {
      width: open ? '86px' : '48px',
      height: open ? '86px' : '48px',
      backgroundColor: 'red',
    },
  },
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.primary.main,
    whiteSpace: 'nowrap',
    width: 260,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    [theme.breakpoints.up('sm')]: {
      position: 'relative',
      ...(!open && {
        overflowX: 'hidden',
        width: '80px',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      }),
    },
    [theme.breakpoints.down('sm')]: {
      width: 216,
    },
  },
}));

const MainDrawer = () => {
  const theme = useTheme();
  const isUpSM = useMediaQuery(theme.breakpoints.up('sm'));
  const dispatch = useDispatch();
  const open = useSelector(
    ({ MainNavigation }) => MainNavigation.MainDrawer.openDrawer
  );

  const toggleDrawer = () => {
    dispatch(Actions.toggleMainDrawer());
  };

  const routes = [
    {
      to: 'dashboard',
      icon: <DashboardIcon sx={styledIcon} />,
      name: 'Dashboard',
    },
    {
      to: 'admin',
      icon: <SettingsIcon sx={styledIcon} />,
      name: 'Administrador',
      children: [
        {
          to: 'acciones',
          icon: <ComputerIcon sx={styledIcon} />,
          name: 'Acciones',
        },
        {
          to: 'admin/modulos',
          icon: <ViewModuleIcon sx={styledIcon} />,
          name: 'Módulos',
        },
        {
          to: 'usuarios',
          icon: <GroupIcon sx={styledIcon} />,
          name: 'Usuarios',
        },
        {
          to: 'roles',
          icon: <LightbulbIcon sx={styledIcon} />,
          name: 'Roles',
        },
      ],
    },
    {
      to: 'productos',
      icon: <ShoppingCartIcon sx={styledIcon} />,
      name: 'Productos',
    },
  ];

  return (
    <Drawer
      variant={isUpSM ? 'permanent' : 'temporary'}
      open={open}
      onClose={toggleDrawer}
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          '&.MuiToolbar-root': {
            justifyContent: open ? 'flex-end' : 'center',
          },
        }}
      >
        <IconButton onClick={toggleDrawer} sx={styledIcon}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </Toolbar>

      <Box sx={boxIconAvatar}>
        <Avatar open={open}>H</Avatar>
      </Box>

      <ListNav routes={routes} open={open} />
    </Drawer>
  );
};

export default MainDrawer;
