import React, {useState,useEffect} from 'react';
import FilmsBlock from '../components/FilmsBlock';
import Baner from '../components/UI/Banner/Baner';
import { useFeatching } from '../Hooks/useFeatching';
import banerImg from "../img/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg";
import FilmsService from '../API/FilmsService';
import {useParams} from "react-router-dom";
import Loader from '../components/UI/Loader/Loader';

function Genres() {

  const params = useParams();

  const [films, setFilms] = useState({});
  const [searchFilms, isLoading, errorFilms, setError] = useFeatching(async () => {
    let response = await FilmsService.getGenre(params.genreId);
    if(!response.success && response.success !== undefined){
      setError(response.status_message)
    }else{
      setFilms(response.results);
    };
  })

  useEffect(() => {
    searchFilms();
    // eslint-disable-next-line
  }, [params.genreId]);

  return (
    <main>
        <Baner src={banerImg} text="Watch your favourite genre"></Baner>
        {errorFilms && <h1 style={{color: "red", textAlign: "center"}}>Error: {errorFilms}</h1>}
        <FilmsBlock films={films}  name="Now Playing" />
        {isLoading && !errorFilms && <Loader/>}
    </main>
  )
}

export default Genres