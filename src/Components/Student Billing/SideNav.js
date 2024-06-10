import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import '../Assets/Grid1.css';
import BasicTextFields from './Placeholder';
import UseFormControl from './TextField';
import CustomersFilters3 from './Final';



function SideNav(props) {
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

SideNav.propTypes = {
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

export default function BasicTabs1() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
        <div className='hold'>
            <div>
                <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Bank Transfer" {...a11yProps(0)} />
                    <Tab label="Cash" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <SideNav value={value} index={0}>
                    <div className='gridcontainer3'>
                        <div><Typography>Bank</Typography></div>
                        <div><Typography>Payment Mode</Typography></div>
                        <div><Typography>Transfer Ref</Typography></div>
                        <div><CustomersFilters3 val='International Bank'/></div>
                        <div><CustomersFilters3 val='Credit Card / Debit Card / UPI / Online net Banking'/></div>
                        <div><CustomersFilters3 val='123/1000/321'/></div>
                        
                        
                    </div>
                </SideNav>
                <SideNav value={value} index={1}>
                    
                </SideNav>
                </Box>
            </div>
            <div>
                <Button variant='contained'>
                    <SaveIcon/>
                    Save
                </Button>
            </div>
        </div>
    </React.Fragment>
  );
}
