import React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Input1({val}) {
  return (
    <Card >
      <OutlinedInput
        varia
        placeholder={val}
        fullWidth={false}
        sx={{ height:'35px', border: 'none' }}
      />
    </Card>
  );
}
