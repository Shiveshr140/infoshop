import React from 'react';
import { LineChart } from '@mui/x-charts';
import {  lineChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
// import { useTheme } from '@emotion/react';
import '../../App.css'


const years = [
    new Date(2011, 0, 1),
    new Date(2012, 0, 1),
    new Date(2013, 0, 1),
    new Date(2014, 0, 1),
    new Date(2015, 0, 1),
    new Date(2016, 0, 1),
    new Date(2017, 0, 1),
];

const India = lineChartData[0].map(item=> item.y)

const England = lineChartData[1].map(item=> item.y)

const Germany = lineChartData[2].map(item=> item.y)

export default function LineCharts() {
  const currentMode = useStateContext()
 
  return (
    <LineChart
      xAxis={[
        {
          id: 'Years',
          data: years,
          scaleType: 'time',
          valueFormatter: (date) => date.getFullYear().toString(),
          color: currentMode === 'Dark' ? 'white' : 'black'
          },
      ]}
      
      series={[
        {
          id: 'India',
          label: 'India',
          data: India,
          // stack: 'total',
          area: false,
          showMark: true,
          
        },
        {
          id: 'Germany',
          label: 'German',
          data: Germany,
          // stack: 'total',
          area: false,
          showMark: true,
        },
        {
          id: 'England',
          label: 'England',
          data: England,
          // stack: 'total',
          area: false,
          showMark: true,
        },
      ]}
      width={600}
      height={400}
      margin={{ left: 70 }}

      sx={{
        " & .MuiChartsAxis-line": {
          stroke: currentMode === 'Dark' ? 'white' : 'black', 
        },
        "& .MuiChartsAxis-tickLabel":{
          fill: currentMode === 'Dark' ? 'white' : 'black'
        },
        "& .MuiChartsAxis-tick":{
          stroke: currentMode === 'Dark' ? 'white' : 'black'
        },
        '& ..MuiTooltip-tooltip': {
          color:'white',
          fontSize:'40px'
        },
        
        }}
        
      tooltip={{ trigger: 'axis', fill: currentMode === 'Dark' ? 'white' : 'black'}} 
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: -6,
          labelStyle:{
            fontSize:12,
            fill:currentMode === 'Dark'? 'white': 'black'
          }
        },
      }}
       > 
       
       </LineChart>
  );
}









