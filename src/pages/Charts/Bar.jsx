import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import {  barChartData } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';
import '../../App.css'


const countries = [
  'USA', 'GBR', 'CHN'
];

const USA = barChartData[0].map(item=> item.y)

const GBR = barChartData[1].map(item=> item.y)

const CHN = barChartData[2].map(item=> item.y)


const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar" title="Olympic Medal Counts - RIO" />
      <div className=" w-full">
      <BarChart
    xAxis={[
      {
        id: 'Countries',
        data: countries,
        scaleType: 'band',
        // valueFormatter: (date) => date.getFullYear().toString(),
        color: currentMode === 'Dark' ? 'white' : 'black'
        },
    ]}
    
    series={[
      {
        id: 'USA',
        label: 'Gold',
        data: USA,
        area: false,
        showMark: true,
        color: 'gold'
      },
      {
        id: 'GBR',
        label: 'Silver',
        data: GBR,
        area: false,
        showMark: true,
        color: 'silver'
      },
      {
        id: 'CHN',
        label: 'Bronze',
        data: CHN,
        area: false,
        showMark: true,
        color: '#cd7f32'
        
      },
    ]}
    width={800}
    height={500}
    margin={{ left: 70 }}

    sx={{
    
      "& .MuiChartsAxis-line": {
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
      '.MuiLineElement-root': {
        display: 'none',
      },
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
     > 
     
     </BarChart>
      </div>
    </div>
  );
};

export default Bar;