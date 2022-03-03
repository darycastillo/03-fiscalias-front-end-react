import { Paper, Grid } from '@mui/material';
import LoginForm from '../components/LoginForm';
import withReducer from '@store/withReducer';
import reducer from '../store/reducers';

const leftGridProps = {
  item: true,
  xs: false,
  sm: false,
  md: 12,
  sx: {
    backgroundPosition: 'center',
    backgroundSize: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
  },
};

const SignInSide = () => {
  return (
    <Grid
      container
      component="main"
      sx={(theme) => ({
        // backgroundImage: 'url(/img/fondo.jpeg)',
        backgroundColor: theme.palette.secondary[50],
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      })}
    >
      <Grid {...leftGridProps}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default withReducer('SignInSide', reducer)(SignInSide);
