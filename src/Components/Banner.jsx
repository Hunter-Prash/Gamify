import React, { useEffect } from 'react'


function Banner({gameBanner}) {
    useEffect(()=>{
        console.log("gamebanner",gameBanner)
    },[])
  return (
    <div>
        <h2 className='p-2 dark:text-white font-bold text-[20px]'>{gameBanner.name}</h2>
        
       <img src={gameBanner.background_image} className='h-[400px] w-full object-cover rounded-xl mt-1'/>
       <button className='m-2 p-2 bg-green-600 rounded-lg cursor-pointer hover:bg-blue-600 text-white font-semibold'>Get Now</button>
    </div>
  )
}

export default Banner
