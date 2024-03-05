import React, { useContext, useEffect, useState } from 'react'
import logo from './../assets/images/logo.png'
import { FaSearch } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  
  const {theme,setTheme}=useContext(ThemeContext)

  useEffect(()=>{
      console.log(theme)
  },[])
  return (
    <div className='relative flex h-14 items-center p-2'>
        <img src={logo} className='w-20 h-20 mt-[20px]'/>
        <div className='flex bg-slate-200 p-2 w-full items-center rounded-full'>
            <input size="50"className='outline-black p-1 rounded-lg ' type='text' placeholder='Search Games'  />

            <FaSearch className='ml-[10px]' />
            
            {theme=='light'  ?  <FaMoon className='absolute ml-[73rem] text-[25px] bg-slate-200 text-black cursor-pointer' onClick={()=>setTheme('dark')}/>  :  
            <IoSunnyOutline className='absolute ml-[73rem] text-[25px] bg-slate-200 text-black cursor-pointer' onClick={()=>setTheme('light')}/>}


        </div>

    </div>
  )
}

export default Header
