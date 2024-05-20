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
import './Dashboard.css';
import ArcDesign from './Dashboard/Gauge';
import Card from '@mui/material/Card';

const Dashboard = () => {
  return (
    <div className='container'>
      <div className='card1 cash' >
        <OutlinedCard/>
      </div>
      <div className='gauge'> 
        Fee Collection Progress    
          <ArcDesign/>
              
      </div>
      <div className='card3'>
        <OutlinedCard3/>
      </div>
      <div className='card4 cash'>
        <OutlinedCard2/>
      </div>
      <div className='card5'>
        <OutlinedCard4/>
      </div>
      <div className='card6'>
        <AlignedCard/>
      </div>
      <div className='bar'>
        <FeeCollectedBarChart/>
      </div>
      <div className='card8'>
        <AlignedCard2/>
      </div>

    </div>
  );
};

export default Dashboard;