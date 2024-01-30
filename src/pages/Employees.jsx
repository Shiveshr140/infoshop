import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Header } from '../components';
import { employeesData, employeesGrid  } from '../data/dummy';
import '../App.css'


const Employees = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees'></Header>
      
      <DataGrid  className="mt-4" 
          columns={employeesGrid}
          rows={employeesData}
          pageSize={5}
          rowHeight={100}
      />
      
    </div>
  );
};

export default Employees;