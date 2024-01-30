import React from 'react';
// import Stack from '@mui/material/Stack';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import Box from '@mui/material/Box';
import { useStateContext } from '../../contexts/ContextProvider';

const SparkLine = ({ data, height, width }) => {
  const {currentMode} = useStateContext() 
  const [showHighlight, setShowHighlight] = React.useState(true);
  const [showTooltip, setShowTooltip] = React.useState(true);

  const chartData = data.map((item) => item.yval);
  const x_data = data.map(item=> item.x)

  const handleHighlightChange = (event) => {
    setShowHighlight(event.target.checked);
  };

  const handleTooltipChange = (event) => {
    setShowTooltip(event.target.checked);
  };
  

  return (
        
        <Box sx={{ height, width }}>
          <SparkLineChart
            data={chartData}
            xAxis={{
              scaleType: 'Number',
              data: x_data
              }}
            height={80}
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
            showHighlight={showHighlight}
            showTooltip={showTooltip}
            
          />
        </Box>
      
  );
};

export default SparkLine;
