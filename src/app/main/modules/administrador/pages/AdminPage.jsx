import React from 'react';
import ApsCardCount from '@components/ApsCardCount';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const AdminPage = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        spacing={3} /* rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} */
      >
        <Grid item md={6} xs={12}>
          <ApsCardCount
            title="Acciones"
            subtitle="cantidad"
            count="45"
            img="/img/svg/Pair programming.svg"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ApsCardCount
            title="Usuarios"
            subtitle="cantidad"
            count="324"
            img="/img/svg/Build a community.svg"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ApsCardCount
            title="Modulos"
            subtitle="cantidad"
            count="4"
            img="/img/svg/Book appointment.svg"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <ApsCardCount
            title="Roles"
            subtitle="cantidad"
            count="12"
            img="/img/svg/Virtual reality.svg"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminPage;
