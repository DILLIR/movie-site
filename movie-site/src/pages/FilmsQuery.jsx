import React,{useState, useEffect} from 'react';
import FilmsBlock from "../components/FilmsBlock";
import { useFeatching } from '../Hooks/useFeatching';
import FilmsService from '../API/FilmsService';
import {useParams} from "react-router-dom";

function FilmsQuery() {
  const params = useParams();

  const [films, setFilms] = useState({});
  const [searchFilms, isLoading, errorFilms, setError] = useFeatching(async () => {
    let response = await FilmsService.searchFilms(params.query);
    if(!response.success && response.success !== undefined){
      setError(response.status_message)
    }else{
      setFilms(response);
    };
  })

  useEffect(() => {
    searchFilms();
  }, [params.query]);

  return (
    <FilmsBlock films={films}  name="Search results" />
  )
}

export default FilmsQuery;