import { AppBar as MuiAppBar, Toolbar, IconButton, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  AccountCircle as AccountCircleIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon,
} from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import * as Actions from '../store/actions';

const AppBar = styled(MuiAppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const styledIcon = {
  color: (theme) => theme.palette.secondary[50],
  minHeight: '48px',
  minWidth: '48px',
  margin: '8px',
};

const MainAppBar = ({ sx }) => {
  const dispatch = useDispatch();

  return (
    <AppBar elevation={4} position="absolute" sx={sx}>
      <Toolbar
        sx={{
          '&.MuiToolbar-root': {
            paddingLeft: 0,
            paddingRight: 0,
            display: 'flex',
            justifyContent: 'space-between',
          },
        }}
      >
        <IconButton
          sx={styledIcon}
          onClick={() => dispatch(Actions.toggleMainDrawer())}
        >
          <MenuIcon />
        </IconButton>
        <div>
          <IconButton sx={styledIcon}>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton sx={styledIcon}>
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default MainAppBar;
