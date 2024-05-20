import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import redimg from './Red.jpeg'


const card = (
  <React.Fragment>
    <CardContent>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Todays's Expenses:
        </Typography>
        <br/>
        <CardMedia 
          sx={{height: 44, width: 44}}
          component='img'
          image={redimg}
        />
      </Box>
      <Typography variant="h5" component="div">
        2,000.00
      </Typography>
    </CardContent>
    
  </React.Fragment>
);

export default function OutlinedCard4() {
  return (
    <Box sx={{ maxWidth:339,maxHeight:117, minWidth: 275}}>
      <Card variant="outlined" color='Secondary'>{card}</Card>
    </Box>
  );
}

