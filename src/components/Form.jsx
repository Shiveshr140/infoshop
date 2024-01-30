import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useStateContext } from '../contexts/ContextProvider';

export default function Form({prop, propIn, propChange}) {
  const { currentColor} = useStateContext();
  
  return (
    <Box
      component="form"
      noValidate
      style={{ display: 'flex', flexDirection: 'column',}}
      
    >
      <input
        placeholder='Add...'
        type='text'
        value={propIn}
        onChange={propChange}
        className='mt-5 mb-2 rounded-xl'
        style={{ border: `2px solid ${currentColor}`, padding:'12px 10px 12px 12px', outline:'none', fontSize:'16px' }}
      />
      <Button
        variant="outlined"
        color="secondary"
        onClick={prop}
        style={{ borderColor: currentColor, color: currentColor, marginBottom:'15px', alignSelf:'flex-end' }} 
      >
        Add
      </Button>
    </Box>
  )
}
