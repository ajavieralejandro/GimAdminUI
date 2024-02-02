import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CajaDropdown() {
  const [age, setAge] = React.useState('');

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };

  return (
    <div className='bg-white'>
    <Box  sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Caja</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Caja Admin Lomas</MenuItem>
          <MenuItem value={20}>Caja Admin Lanus</MenuItem>
          <MenuItem value={30}>Caja Lomas</MenuItem>
          <MenuItem value={30}>Caja Lanus</MenuItem>

        </Select>
      </FormControl>
    </Box>
    </div>
  );
}