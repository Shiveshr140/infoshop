import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoDotFill } from "react-icons/go";
// import { IoIosMore } from 'react-icons/io';
import { Stacked,  Button,  SparkLine } from '../components';
import { earningData,  SparklineAreaData} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import ecommerce from '../data/Ecommerce.jpg'

const Ecommerce = () => {
  const {currentColor} = useStateContext()
  return (
    <div className=" mt-14 bg-white dark:text-gray-200 dark:bg-main-dark-bg">
      <div className="flex flex-col flex-wrap lg:flex-nowrap justify-center ">
        {/* <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3  bg-hero-pattern bg-no-repeat bg-cover bg-center"> */}
        
        <div className="flex flex-col justify-between items-start  bg-white h-100 dark:text-gray-200 
                         dark:bg-secondary-dark-bg md:w-1/2  p-4 pt-9 mb-10 rounded-2xl mx-auto mt-6 lg:w-1/2"> 
            <div className='flex  justify-between items-center'>
              <div>
              <p className='font-bold text-gray-400'> Earning </p>
              <p> $93,678 </p>
              </div>
              <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4 ml-4"
            >
              <BsCurrencyDollar />
            </button>
            <img src={ecommerce} style={{width:'200px', height:'200px', marginLeft:'3rem', borderRadius:'10%'}}></img>
          </div>
            <div className='mt-6 self-center'>
           <Button color='white' text='Download' bgColor={currentColor}
              borderRadius='10px' size='md' />
          </div>
        </div>
      {/* </div>    */}
          <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
            {earningData.map(item=>(
              <div key={item.title} className="bg-white h-44 dark:text-gray-200 
                         dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                     {item.percentage}</span>
              </p>
              <p className='text-gray-400 mt-1'>{item.title}</p>
              </div>
            ))}
          </div>   
      </div>
      <div className='flex gap-10 mt-10 flex-wrap justify-center dark:bg-main-dark-bg'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 
                         p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Revenue Update</p>
          <div className='flex items-center gap-4'>
            <p className="flex items-center gap-2 text-gray-600 
                           hover:drop-shadow-xl">
              <span> <GoDotFill /> </span>
              <span>Expense</span>
            </p>
            <p className="flex items-center gap-2 text-gray-600 
                           hover:drop-shadow-xl">
              <span> <GoDotFill /> </span>
              <span>Budget</span>
            </p>
          </div >
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>$93,599</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white
                                bg-green-400 ml-3 text-xs'> 23%</span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">$48,487</p>

                <p className="text-gray-500 mt-1">Expense</p>
              </div>
              {/* SparkLine chart  */}
            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="80px" 
                          width="250px" data={SparklineAreaData} color={currentColor} />
            </div>
              
              <div className="mt-10">
                <Button color='white' text='Download Report' bgColor={currentColor}
                     borderRadius='10px' size='md'/>
              </div>
          
          </div>
            <Stacked height="320px" width='360px'/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Ecommerce