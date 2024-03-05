import React, { useState,useEffect } from 'react'
import GenreList from '../Components/GenreList'
import Banner from '../Components/Banner'
import GlobalApi from '../Services/GlobalApi'
import TrendingGames from '../Components/TrendingGames';
import GamesByGenre from '../Components/GamesByGenre';

function Home() {

 const [allGameList,setAllGameList]=useState([]);
 const[gamesbygenre,setgamesbygenre]=useState([]);

      useEffect(()=>{
        getAllGamesList();
        getbygenre(4);
      },[])

  const getAllGamesList=()=>{
  GlobalApi.getAllGames.then((resp)=>{
    setAllGameList(resp.data.results);
  })
  }



  const xyz=(idvalue)=>{
      getbygenre(idvalue);
  }//THIS IS A CALLBACK FNC USED TO ACCEPT THE VALUE FROM THE CHILD GENRELIST COMPONENT
  
  const getbygenre=(ID)=>{
    console.log("i love u",ID);

    GlobalApi.getbygenre(ID).then((resp)=>{
        setgamesbygenre(resp.data.results)
    })
  }

  return (// THE PROP onChildValue RECEIVES THE DATA SENT FROM GENRE-LIST 
    <div className='grid grid-cols-4 m-[1rem] p-[10px]'>
    
        <div><GenreList onChildValue={xyz}/></div>

        <div className='col-span-3'>{allGameList.length>0 && gamesbygenre.length>0 ?
                  <div>
                    <Banner gameBanner={allGameList[1]}/>
                    <TrendingGames list={allGameList}/> 
                    <GamesByGenre x={gamesbygenre}/>
                  </div>  
              :null}
        </div>

    </div>
  )
}

export default Home
