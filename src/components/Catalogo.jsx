import React from "react";

function ListMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.ID}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <img src={movie.Poster} alt={movie.Title}></img>
        </li>
      ))}
    </ul>
  );
}

function NoMovies() {
  return <p>No existe la pelicula</p>;
}

export function Movies({ movies }) {
  const hasResults = movies?.length > 0;
  return hasResults ? <ListMovies movies={movies} /> : <NoMovies />;
}
