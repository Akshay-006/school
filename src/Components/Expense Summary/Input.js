import React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function CustomersFilters({val}) {
  return (
    <Card >
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder={val}
        startAdornment={
          <InputAdornment position="start">
            <CalendarMonthIcon/>
          </InputAdornment>
        }
        sx={{ maxWidth: '500px', height:'36px' }}
      />
    </Card>
  );
}
