import React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react';

export default function CustomersFilters() {
  return (
    <Card >
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Student"
        startAdornment={
          <InputAdornment position="start">
            <MagnifyingGlassIcon fontSize="var(--icon-fontSize-md)" />
          </InputAdornment>
        }
        sx={{ maxWidth: '500px', height:'36px' }}
      />
    </Card>
  );
}
