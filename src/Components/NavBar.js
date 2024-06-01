import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from './Dashboard';
import OutlinedCard from './Dashboard/CashFlow';
import OutlinedCard2 from './Dashboard/CashSpent';
import AlignedCard from './Dashboard/TutionFee';
import AlignedCard2 from './Dashboard/TransportFee';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import TickPlacementBars from './Dashboard/Bar';
import ArcDesign from './Dashboard/Gauge';
import OutlinedCard3 from './Dashboard/CollectedFee';
import OutlinedCard4 from './Dashboard/TodaysExpenses';
import FeeCollectedBarChart from './Dashboard/Bar';
import CustomersTable from './Student Receipts/Table1';
import StudentReceipts from './StudentReceipts';




function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '50%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Student Billing" {...a11yProps(1)} />
          <Tab label="Student receipts" {...a11yProps(2)} />
          <Tab label="Expenses" {...a11yProps(3)} />
          <Tab label="Expense Summary" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Dashboard/>
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Student
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        
        <br/>
        <StudentReceipts/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Expenses
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        Expense Summary
      </CustomTabPanel>
    </Box>
  );
}
