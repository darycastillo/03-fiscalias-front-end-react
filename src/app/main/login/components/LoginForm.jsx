import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Typography,
} from '@mui/material';
import { Visibility, VisibilityOff, Email } from '@mui/icons-material';
import ApsTextField from '@components/ApsTextField';
import useLoginForm from '../hooks/useLoginForm';

const LoginForm = () => {
  const { showPassword, setShowPassword, formik } = useLoginForm();

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          height: '90px',
          width: '180px',
          backgroundImage: 'url(/img/MP_logo.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
          marginBottom: '32px',
        }}
      ></div>
      <Typography
        variant="h1"
        color="primary"
        sx={{ marginBottom: '80px' /* color: '#FFFFFF' */ }}
      >
        Iniciar sesión
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <ApsTextField
          label="Email Address"
          name="email"
          type="email"
          formik={formik}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Email />
              </InputAdornment>
            ),
          }}
        />
        <ApsTextField
          sx={{ mt: '36px' }}
          label="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          formik={formik}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          disabled={!formik.isValid}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: '36px', borderRadius: '8px', height: '60px' }}
        >
          <Typography variant="h6">Ingresar</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;
