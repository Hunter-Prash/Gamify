import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function GenreList({onChildValue}) {//THIS PROP ACCEPTS THE VALUE SENT FROM LINE 23

    const [genreList,setGenreList]=useState([])
    const [activeIndex,setActiveIndex]=useState(0)
    useEffect(()=>{
        getGenreList();
    },[])
    const getGenreList=()=>{
        GlobalApi.getGenreList.then((resp)=>{
            setGenreList(resp.data.results)
        })
    }
  return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white'>Genre</h2>
        {genreList.map((item,index)=>(

          //STYLING EVERY GENRE INDIVIDUALLY using the map() fnc
          <div onClick={()=>{setActiveIndex(index);
                        onChildValue(item.id);// HERE WE ARE PASSING VALUE FROM CHILD TO PARENT COPONENT
             }}
            className={`flex gap-2 items-center m-2 cursor-pointer hover:bg-slate-400 rounded-md p-2 group dark:text-white  ${activeIndex===index ? "bg-slate-400 dark:bg-slate-400 " : null}`}>


            <img src={item.image_background} className='w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-125 transition-all ease-out duration-300'/>

            <h3 className={`group-hover:font-bold transition-all ease-out duration-300 hover:text-black  ${activeIndex===index ? "text-black" : null}`}>{item.name}</h3>


          </div>
        ))}
    </div>
  )
}

export default GenreList
