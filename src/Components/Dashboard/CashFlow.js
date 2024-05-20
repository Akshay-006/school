import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Cash Flow : Collected
      </Typography>
      <Typography variant="h5" component="div">
        1,50,000.00
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        25 % increase compared to last month
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ maxWidth:339,maxHeight:117, minWidth: 275}}>
      <Card variant="outlined" color='Secondary'>{card}</Card>
    </Box>
  );
}

