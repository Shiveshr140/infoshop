import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';
import profile from '../data/profile.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

const NavButton = ({title, customFunc, icon, color, dotColor})=>{
  return (
    <Tooltip content={title} position="BottomCenter">
      <button type="button" style={{color}} onClick={customFunc} 
         className="relative text-xl rounded-full p-3 hover:bg-light-gray">
       <span style={{background:dotColor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
          {icon}
        
      </button>
  </Tooltip>
  )
}

const Navbar = () => {
  const { setActiveMenu, isClicked, handleClickNav, screenSize, setScreenSize, currentColor} = useStateContext()


// whenever u use the addEventListner in react u have to remove it also.
  useEffect(() => {
    const handleResize = ()=> setScreenSize(window.innerWidth)
    window.addEventListener('resize', handleResize)
    handleResize();
    return ()=> window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if(screenSize<900){
      setActiveMenu(false)
    }else{
      setActiveMenu(true)
    }

  }, [screenSize])
  
  
  return (
      <div className='flex justify-between md:mx-6 p-2 relative'>
      <NavButton title='Menu' customFunc={()=>setActiveMenu((prev)=> !prev)} icon={<AiOutlineMenu />} color={currentColor} />
    <div className='flex'>
        <NavButton title="Cart" customFunc={() => handleClickNav('cart')} color={currentColor} icon={<FiShoppingCart />} />
        <NavButton title="Chat" dotColor={currentColor} customFunc={() => handleClickNav('chat')} color={currentColor} icon={<BsChatLeft />} />
        <NavButton title="Notification" dotColor={currentColor} customFunc={() => handleClickNav('notification')} color={currentColor} icon={<RiNotification3Line />} />
    
        <Tooltip content="Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClickNav('userProfile')}
          >
            <img
              className="rounded-full w-8 h-8"
              src={profile}
              alt="user-profile"
            />
            <p>
              <span className="text-gray-400 text-14">Hi,</span>{' '}
              <span className="text-gray-400 font-bold ml-1 text-14">
                Shivesh
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </Tooltip>
        {isClicked.cart && (<Cart />)}
        {isClicked.chat && (<Chat />)}
        {isClicked.notification && (<Notification />)}
        {isClicked.userProfile && (<UserProfile />)}
    </div>
    </div>
  )
}

export default Navbar