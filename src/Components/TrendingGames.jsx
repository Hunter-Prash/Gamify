import React, { useEffect } from 'react'

function TrendingGames({list}) {

      useEffect(()=>{
        console.log({list});
      },[])

  return (
    <>
        <h2 className='font-bold text-[30px] mt-6 dark:text-white'>Trending Games</h2>

        <div className='grid grid-cols-4 mt-3 gap-4'>
            {list.map((item,index)=> index>=3 && index<7 && (

                <div className='bg-gray-300 rounded-lg p-1 hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={item.background_image} className='h-[280px] w-[250px] object-cover rounded-lg'/>
                    <h2 className='font-semibold p-1'>{item.name}</h2>  
                </div>

            ))}
        </div>
    </>
  )
}

export default TrendingGames
