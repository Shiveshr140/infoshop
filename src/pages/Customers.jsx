import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';
import '../App.css';


const Customers = () => {
  const getRowId = (row)=>{
    return row.CustomerID
  }
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl '>
      <Header category='Page' title='Customers'></Header>
      
      <DataGrid  className="mt-4" 
          columns={customersGrid}
          rows={customersData}
          pageSize={5}
          rowHeight={100}
          getRowId={getRowId}
          checkboxSelection={true}
      />
      
    </div>
  );
};

export default Customers;