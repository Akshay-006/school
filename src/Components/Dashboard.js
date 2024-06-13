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
import ArcDesign from './Dashboard/Gauge';
import Card from '@mui/material/Card';
import TotalCustomers from './Dashboard/CardCash';
import './Assets/Dashboard.css';



const Dashboard = () => {
  return (
    <div className='container'>
      <div className='card1 cash' >
        <TotalCustomers trend='up' value='1,50,000.00' diff='25' title='Cash Flow : Collected' />
      </div>
      <div className='gauge'> 
        Fee Collection Progress    
          <ArcDesign/>       
      </div>
      <div className='card3'>
        <OutlinedCard3 />
      </div>
      <div className='card4 cash'>
        <TotalCustomers color='#000' value='1,50,000.00' diff='21' trend='up' title='Cash Flow : Spent'/>
      </div>
      <div className='card5'>
        <OutlinedCard4/>
      </div>
      <div className='card6'>
        <AlignedCard col='2,28,000.00' out='72,500.00'/>
      </div>
      <div className='bar'>
        <FeeCollectedBarChart/>
      </div>
      <div className='card8'>
        <AlignedCard2 col='2,28,000.00' out='72,500.00'/>
      </div>

    </div>
  );
};

export default Dashboard;