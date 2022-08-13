import React from 'react';
import Container from './Container';
import FilmItem from './FilmItem';


function FilmsBlock({films, name}) {


  return (
    <div className='films'>
        <Container>
          <h2 className='films__heading'>{name}</h2>
          <div className='films__container'>
          {Object.keys(films).length === 0 ? <h1>No results</h1> : films.results.map((film, index) =>{
            return (<FilmItem poster={`https://image.tmdb.org/t/p/original/${film.poster_path}`} info={film} key={index}></FilmItem>)
          })}
          {}
          </div>
        </Container>
      </div>
  )
}

export default FilmsBlock