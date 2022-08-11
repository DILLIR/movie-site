import React from 'react';
import Container from './Container';
import FilmItem from './FilmItem';


function FilmsBlock({films}) {
  return (
    <div className='films'>
        <Container>
          <h2 className='films__heading'>Now Playing</h2>
          <div className='films__container'>
          {films.map((film, index) =>{
            return (<FilmItem poster={film.poster} info={film.info} key={index}></FilmItem>)
          })}
          </div>
        </Container>
      </div>
  )
}

export default FilmsBlock