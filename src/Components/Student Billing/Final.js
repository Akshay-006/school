import React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { MagnifyingGlass as MagnifyingGlassIcon } from '@phosphor-icons/react';

export default function CustomersFilters3({val}) {
  return (
    <Card >
      <OutlinedInput
        defaultValue=""
        fullWidth
        placeholder={val}
        sx={{ maxWidth: '500px', height:'36px' }}
      />
    </Card>
  );
}
