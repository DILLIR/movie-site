import React, {useState, useEffect} from 'react'
import Baner from '../components/UI/Banner/Baner';
import banerImg from "../img/geoffrey-moffett-TFRezw7pQwI-unsplash.jpg";
import FilmsBlock from '../components/FilmsBlock';
import FilmsService from '../API/FilmsService';
import Loader from '../components/UI/Loader/Loader';
import { useFeatching } from '../Hooks/useFeatching';
import { useRef } from 'react';
import { useObserver } from '../Hooks/useObserver';


function CurrentMovies() {

  const [films, setFilms] = useState({});
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [featchFilms, isLoading, errorFilms, setError, setIsLoading] = useFeatching(async (page) => {
    let response = await FilmsService.getFilms(page);
    if(!response.success && response.success !== undefined){
      setError(response.status_message)
    }else if(page === 1){
      setFilms(response.results);
      setTotalPages(response.total_pages);
    }else{
      setFilms([...films,...response.results]);
    }
  })

  useEffect(() => {
    featchFilms(page);
    // eslint-disable-next-line
  }, [page]);

  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isLoading, ()=>{
      setIsLoading(true);
      setTimeout(() =>{setPage(p=>p+1);}, 1000);
  })

  return (
    <main>
      <Baner src={banerImg} text="Watch our current premieres"></Baner>
      {errorFilms && <h1 style={{color: "red", textAlign: "center"}}>Error: {errorFilms}</h1>}
      <FilmsBlock films={films}  name="Now Playing" />
      <div className='odserver' ref={lastElement} style={{height: 30}}></div>
      {isLoading && !errorFilms && <Loader/>}
    </main>
   
  )
}

export default CurrentMovies;