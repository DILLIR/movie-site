import React,{useState, useEffect, useRef} from 'react';
import FilmsBlock from "../components/FilmsBlock";
import { useFeatching } from '../Hooks/useFeatching';
import FilmsService from '../API/FilmsService';
import {useParams} from "react-router-dom";
import Loader from '../components/UI/Loader/Loader';
import { useObserver } from '../Hooks/useObserver';

function FilmsQuery() {
  const params = useParams();

  const [films, setFilms] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [searchFilms, isLoading, errorFilms, setError] = useFeatching(async (page, clearPage = false) => {
    let response = await FilmsService.searchFilms(params.query, page);
    if(!response.success && response.success !== undefined){
      setError(response.status_message)
    }else if(page === 1){
      setPage(1);
      setFilms(response.results);
      setTotalPages(response.total_pages);
    }else{
      setFilms([...films, ...response.results]);
    };
  })
  
  useEffect(() => {
    searchFilms(1,true);
    // eslint-disable-next-line
  }, [params.query]);

  useEffect(() => {
    searchFilms(page);
    console.log(page);
    // eslint-disable-next-line
  }, [page]);

  const lastElement = useRef();

  useObserver(lastElement, page < totalPages, isLoading, ()=>{
      setPage(p=>p+1);
  })

  return (
    <main>
      {errorFilms && <h1 style={{color: "red", textAlign: "center"}}>Error: {errorFilms}</h1>}
      <FilmsBlock films={films}  name="Search results" />
      <div className='odserver' ref={lastElement} style={{height: 30}}></div>
      {isLoading && !errorFilms && <Loader/>}
    </main>
  )
}

export default FilmsQuery;