import React from 'react';
// import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, SplineAreaSeries, Legend } from '@syncfusion/ej2-react-charts';
// import LineChart from '../../components';
import { LineChart } from '@mui/x-charts'
import { ChartsHeader } from '../../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis, areaChartData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import '../../App.css'

const years = [
  new Date(2011, 0, 1),
  new Date(2012, 0, 1),
  new Date(2013, 0, 1),
  new Date(2014, 0, 1),
  new Date(2015, 0, 1),
  new Date(2016, 0, 1),
  new Date(2017, 0, 1),
  new Date(2018, 0, 1),
  new Date(2019, 0, 1),
  new Date(2020, 0, 1),
];

const India = areaChartData[0].map(item=> item.y)

const England = areaChartData[1].map(item=> item.y)

const Germany = areaChartData[2].map(item=> item.y)

export default function Area() {
const {currentMode} = useStateContext();
return (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <ChartsHeader category="Area" title="Inflation Rate in percentage" />
    <div className="w-full">
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
        area: true,
        showMark: false,
        
      },
      {
        id: 'Germany',
        label: 'German',
        data: Germany,
        // stack: 'total',
        area: true,
        showMark: false,
      },
      {
        id: 'England',
        label: 'England',
        data: England,
        // stack: 'total',
        area: true,
        showMark: false,
        
      },
    ]}
    width={800}
    height={500}
    margin={{ left: 70 }}

    yAxis={[
      {
        id: 'percentageAxis',
        scaleType: 'linear',
        tickFormatter: (value) => `${value}%`, // Format tick labels as percentages
      }
    ]}

    // bottomAxis={{
    //   disableLine: true,
    //   label: "my axis",
    // }}

    sx={{
      //This sx does nothing
      "& .MuiChartsAxis-line": {
        stroke: currentMode === 'Dark' ? 'white' : 'black', // Change the color of the x-axis line
        
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
     
     </LineChart>
    </div>
  </div>
);
}