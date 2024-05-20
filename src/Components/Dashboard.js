import React from 'react';
import Grid from '@mui/material/Grid';
import OutlinedCard from './Dashboard/CashFlow';
import OutlinedCard2 from './Dashboard/CashSpent';
import OutlinedCard3 from './Dashboard/CollectedFee';
import FeeCollectedBarChart from './Dashboard/Bar';
import OutlinedCard4 from './Dashboard/TodaysExpenses';
import AlignedCard2 from './Dashboard/TransportFee';
import AlignedCard from './Dashboard/TutionFee';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3} >
        <Grid item xs={12} md={4} spacing={3}>
          <OutlinedCard/>
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
        <OutlinedCard3/>
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <OutlinedCard2/>
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
        <OutlinedCard/>
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <AlignedCard/>
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <FeeCollectedBarChart/>
        </Grid>
        <Grid item xs={12} md={4} spacing={3}>
          <AlignedCard2/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;