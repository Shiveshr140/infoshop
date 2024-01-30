import React from 'react';
import {BarChart } from '@mui/x-charts';
import { stackedChartData} from '../../data/dummy'; 
import { useStateContext } from '../../contexts/ContextProvider';



const bData = stackedChartData[0].map(item=> item.y)
const eData = stackedChartData[1].map(item=> item.y)
const xLabels = stackedChartData[0].map(item=> item.x)

export default function Stacked() {
 const {currentMode} = useStateContext()
 console.log(currentMode)
  return (
    <BarChart
      width={360}
      height={320}
      series={[
        { data: bData, label: 'Budget', id: 'bId', stack: 'total' },
        { data: eData, label: 'Expense', id: 'eId', stack: 'total' },
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      sx={{
        "& .MuiChartsAxis-line": {
          stroke: currentMode === 'Dark' ? 'white' : 'black'
          
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
        }
        }}
        
      tooltip={{ trigger: 'axis', fill: currentMode === 'Dark' ? 'white' : 'black'}} 
      slotProps={{
        legend: {
          direction: 'row',
          position: { vertical: 'bottom', horizontal: 'middle' },
          padding: -6,
          labelStyle:{
            fontSize:10,
            fill:currentMode === 'Dark'? 'white': 'black'
          }
        },
      }}

    />
  );
}

