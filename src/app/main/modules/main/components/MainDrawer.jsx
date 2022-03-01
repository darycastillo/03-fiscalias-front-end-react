import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Drawer as MuiDrawer, IconButton, Toolbar } from '@mui/material';

import {
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';
import * as Actions from '../store/actions';

import FlagIcon from '@mui/icons-material/Flag';
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
  const dispatch = useDispatch();
  const open = useSelector(
    ({ MainNavigation }) => MainNavigation.MainDrawer.openDrawer
  );

  const toggleDrawer = () => {
    dispatch(Actions.toggleMainDrawer());
  };

  const routes = [
    {
      to: 'fiscalias',
      icon: <FlagIcon sx={styledIcon} />,
      name: 'Fiscalias',
    },
  ];

  return (
    <Drawer open={open} onClose={toggleDrawer}>
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
        <img src="/img/MP_logo.png" width="140px"></img>
      </Box>

      <ListNav routes={routes} open={open} />
    </Drawer>
  );
};

export default MainDrawer;
