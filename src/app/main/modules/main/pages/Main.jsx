// import React from 'react';
import { Container, Box } from '@mui/material';
import withReducer from '@store/withReducer';
import reducer from '../store/reducers';
import MainAppBar from '../components/MainAppBar';
import MainDrawer from '../components/MainDrawer';
import { useRoutes } from 'react-router-dom';
import { useRouter } from '@hooks';

const Main = () => {
  const { subNavigation } = useRouter();
  const navigation = useRoutes(subNavigation);

  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <MainAppBar
        sx={{
          backgroundColor: {
            special: 'transparent',
          },
        }}
      />
      <MainDrawer />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) => theme.palette.secondary['50'],
          backgroundImage: {
            special: 'url(http://i.stack.imgur.com/kx8MT.gif)',
          },
          backgroundSize: { special: 'cover' },
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Box sx={{ marginTop: '64px' }}>
          <Container maxWidth="lg" sx={{ mt: 2, mb: 2 }}>
            {navigation}
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default withReducer('MainNavigation', reducer)(Main);
