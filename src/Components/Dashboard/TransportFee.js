// src/dashboard/AlignedCard.js
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AlignedCard2 = ({out,col}) => {
  return (
    <Box sx={{ maxWidth: 339, maxHeight: 117, minWidth: 275  }}>
      <Card style={{backgroundColor:'#FFF3F0'}} variant="outlined">
        <CardContent>
            <Typography variant="h5" component="div" sx={{fontFamily: 'Lexend'}}>
                Transport Fee
            </Typography>
            <br/>
            <Box display='flex' justifyContent='space-between'>
                <Box textAlign={'left'}>
                    <Typography sx={{ fontSize: 14, fontFamily: 'Manrope', fontWeight:'bold' }} color="text.secondary" gutterBottom>
                        Fee Collected
                    </Typography>
                    <Typography sx={{ fontSize: 20,fontWeight:'bold', fontFamily:'Lexend' }} color="text.secondary" gutterBottom>
                        {col}
                    </Typography>
                </Box>
                <Box textAlign={'right'}>
                    <Typography sx={{ fontSize: 14, fontFamily: 'Manrope', fontWeight:'bold'  }} color="text.secondary" gutterBottom>
                        Outstanding Fee
                    </Typography>
                    <Typography sx={{ fontSize: 20, fontWeight:'bold', fontFamily:'Lexend' }} color="text.secondary" gutterBottom>
                        {out}
                    </Typography>
                </Box>
            </Box>
            
            
        </CardContent>
      </Card>
    </Box>
  );
};

export default AlignedCard2;
