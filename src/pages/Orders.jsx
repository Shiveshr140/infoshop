import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components';
import { ordersData, ordersGrid } from '../data/dummy';
import Gridmaker from '../DataGrid';
import { Box } from '@mui/material';
import { clsx } from 'clsx'
import '../App.css'


const Orders = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Orders'></Header>
      
      <DataGrid  className="mt-4" 
          columns={ordersGrid}
          rows={ordersData}
          pageSize={5}
          rowHeight={100}
      />
      
    </div>
  );
};

export default Orders;





// const Orders = () => {
//   return (
//     <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
//       <Header category="Page" title="Orders"></Header>
//       <div style={{ height: 400, width: '100%' }}>
//         <Gridmaker />
//       </div>
//     </div>
//   );
// };

// export default Orders;
