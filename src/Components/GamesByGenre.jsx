import React, { useEffect } from 'react'

function GamesByGenre({x}) {

    useEffect(()=>{
        console.log(x)
    },[])

  return (
    <>
        <h2 className='text-[30px] dark:text-white mt-8 font-bold'>Games By Genre</h2>

        <div className='grid grid-cols-4 gap-4 mt-8'>
            
            {x.map((item)=>(
                <div className='bg-[#DCF2F1] rounded-xl p-2 hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={item.background_image}/>
                    <h2 className='font-bold'>{item.name}</h2>
                    <h3 className=''>Metacritic={item.metacritic}</h3>
                </div>
            ))}
        </div>
    </>
  )
}

export default GamesByGenre
