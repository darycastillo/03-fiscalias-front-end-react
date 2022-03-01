import React, { Fragment, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const buttonStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const iconListClass = {
  '&.MuiListItemIcon-root': { minWidth: 'auto' },
};

const iconListClassOpen = {
  '&.MuiListItemIcon-root': { minWidth: '36px' },
};

const ListNavItem = ({
  route,
  sx = {},
  showLeftIcon = false,
  onClick,
  showSubItems = false,
  open = false,
}) => {
  const theme = useTheme();

  return (
    <ListItem
      button
      sx={{ ...buttonStyle, ...sx }}
      component={NavLink}
      to={route.to}
      // onClick={open ? toggleDrawer : () => {}}
      onClick={onClick}
      style={({ isActive }) =>
        isActive ? { backgroundColor: theme.palette.primary['A200'] } : {}
      }
    >
      <>
        <ListItemIcon sx={open ? iconListClassOpen : iconListClass}>
          {route.icon}
        </ListItemIcon>
        {open && (
          <ListItemText
            primary={route.name}
            sx={{ color: (theme) => theme.palette.secondary[50] }}
          />
        )}
        {showLeftIcon && (
          <KeyboardArrowDownIcon
            sx={{
              color: (theme) => theme.palette.secondary[50],
              transform: showSubItems ? 'rotate(-180deg)' : 'rotate(0)',
              transition: '0.4s',
            }}
          />
        )}
      </>
    </ListItem>
  );
};

const ListNav = ({ routes, open }) => {
  const [showSubItems, setShowSubItmes] = useState(false);

  return (
    <List>
      {routes.map((route, index) => (
        <Fragment key={`ListNavItem1${index}`}>
          <ListNavItem
            route={route}
            open={open}
            showLeftIcon={route.children?.length && open}
            showSubItems={showSubItems}
            onClick={
              route.children?.length && open
                ? () => setShowSubItmes((prev) => !prev)
                : undefined
            }
          />
          {showSubItems &&
            open &&
            route.children?.map((child, index) => (
              <ListNavItem
                sx={{ marginLeft: '38px', width: { sm: '221px', xs: '178px' } }}
                key={`ListNavItem2${index}`}
                route={child}
                open={open}
              />
            ))}
        </Fragment>
      ))}
    </List>
  );
};

export default React.memo(ListNav);
