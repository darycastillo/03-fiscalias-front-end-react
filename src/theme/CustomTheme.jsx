import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ThemeConfig from '@config/themeConfig/theme';

const theme = createTheme(ThemeConfig.default);

const CustomTheme = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default CustomTheme;
