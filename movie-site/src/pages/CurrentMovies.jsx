import React, {useState, useEffect} from 'react'
import Baner from '../components/UI/Banner/Baner';
import banerImg from "../img/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg";
import FilmsBlock from '../components/FilmsBlock';
import FilmsService from '../API/FilmsService';
import Loader from '../components/UI/Loader/Loader';
import { useFeatching } from '../Hooks/useFeatching';


function CurrentMovies() {

  const [films, setFilms] = useState({});
  const [featchFilms, isLoading, errorFilms, setError] = useFeatching(async () => {
    let response = await FilmsService.getFilms();
    if(!response.success && response.success != undefined){
      setError(response.status_message)
    }else{
      setFilms(response);
    };
  })

  useEffect(() => {
    featchFilms();
  }, []);

  return (
    <main>
      <Baner src={banerImg} text="Watch our current premieres"></Baner>
      {errorFilms && <h1 style={{color: "red", textAlign: "center"}}>Error: {errorFilms}</h1>}
      {isLoading && !errorFilms ? <Loader/> : <FilmsBlock films={films}  name="Now Playing" />}
    </main>
   
  )
}

export default CurrentMovies;