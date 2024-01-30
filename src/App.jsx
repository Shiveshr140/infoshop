import React, { useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Navbar,  Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders,  Employees,   Customers, Kanban, Line, Area, Bar,
           Pie,  ColorPicker,  Editor } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import { FiSettings } from "react-icons/fi"
import Tooltip from '@mui/material/Tooltip';
import './App.css'


function App() {
  const {  currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();
  
  return (
   <div className={currentMode === 'Dark' ? 'dark' : ''}>
    <BrowserRouter>
     <div className="flex relative ">
      <div className="fixed bottom-4 right-4" style={{zIndex:'1000'}}>
        <Tooltip  position="Top"  >
         <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ backgroundColor:currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
          </button>
        </Tooltip>
      </div>
      {activeMenu ? (
        <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-10'> <Sidebar /> </div>
        ) : (
          <div className='w-0 dark:bg-secondary-dark-bg z-10'> <Sidebar /> </div>
        )}
        {/* Navigation */}

          <div className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }>
         

          <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
            <Navbar />
          </div>
       <div>

       {themeSettings && (<ThemeSettings />)}

          {/* routes */}
          <Routes>
            {/* dashboard */}
            <Route path='/' element={<Ecommerce />}  />
            <Route path='/ecommerce' element={<Ecommerce />}  />

            {/* pages */}
            <Route path='/orders' element={<Orders />}/>
            <Route path='/employees' element={< Employees />}/>
            <Route path='/customers' element={<Customers />}/>

            {/* Apps */}
            <Route path='/kanban' element={< Kanban />}/>
            <Route path='/editor' element={<Editor />}/>
            {/* <Route path='/calendar' element={<Calendar />}/> */}
            <Route path='/color-picker' element={< ColorPicker />}/>

            {/* Charts */}
            <Route path='/line' element={<Line />}/>
            <Route path='/area' element={<Area />}/>
            <Route path='/bar' element={< Bar />}/>
            <Route path='/pie' element={< Pie />}/>
            {/* <Route path='/financial' element={< Financial />}/>
            <Route path='/color-maping' element={"ColorMaping"}/>
            <Route path='/pyramid' element={<Pyramid />}/>
            <Route path='/stacked' element={"Stacked"}/> */}

          </Routes>
        </div>
        </div>
     </div>
    </BrowserRouter>
   
  </div>
   
  )
}

export default App
