import axios from "axios"

const key="3407677c7de148c68a3881043b485b3b" //API KEY

const axiosCreate=axios.create({
    baseURL:'https://api.rawg.io/api'
})

const getGenreList=axiosCreate.get('/genres?key='+key);  //GENRE END-POINT
const getAllGames=axiosCreate.get('/games?key='+key);   //GAMES END-POINT
const getbygenre=(id)=>axiosCreate.get('/games?key='+key+'&genres='+id)
export default{
    getGenreList,getAllGames,getbygenre
}