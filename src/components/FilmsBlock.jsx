import React from "react";
import Container from "./Container";
import FilmItem from "./FilmItem";

const FilmsBlock = React.forwardRef(function (props, ref) {
  const { films, name } = props;

  return (
    <div className="films" ref={ref}>
      <Container>
        <h2 className="films__heading">{name}</h2>
        <div className="films__container">
          {Object.keys(films).length === 0 ? (
            <h1 style={{ color: "#fff" }}>No results</h1>
          ) : (
            films.map((film) => {
              return (
                film.poster_path && (
                  <FilmItem
                    poster={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                    info={film}
                    key={film.id}
                  ></FilmItem>
                )
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
});

export default FilmsBlock;
