import React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import { pieChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { Box } from '@mui/material';
import '../../App.css'



const Pie = () => {
  const {currentMode} = useStateContext
  return (
    <Box style = {{marginLeft:'auto', marginRight:'auto'}} >
      <PieChart style={{marginLeft:'15rem'}}
      series={[
        {
          arcLabel: (item) => item.text,
          data: pieChartData.map((dataPoint, index) => ({
            id: dataPoint.x,
            label: dataPoint.x,
            value: dataPoint.y,
            text: dataPoint.text,
            color: getColorByIndex(index),
          })),
        },
      ]}
      width={500}
      height={500}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
        'tspan':{
          fill:'white'
        }
        }}
        
      tooltip={{ trigger: 'axis', fill: currentMode === 'Dark' ? 'white' : 'black'}} 
      slotProps={{
        legend: {
          direction: 'column',
          position: { vertical: 'right', horizontal: 'right' },
          padding: -10,
          labelStyle:{
            fontSize:10,
            fill:currentMode === 'Dark'? 'white': 'black'
          }
        },
      }}

      
    />
    </Box>
  );
};

export default Pie;


function getColorByIndex(index) {
  const colors = ['#4e79a7',
  '#f28e2c',
  '#e15759',
  '#76b7b2',
  '#59a14f',
  // '#edc949',
  '#af7aa1',
  '#ff9da7',
  // '#9c755f',
  '#bab0ab',];
  return colors[index % colors.length];
}
