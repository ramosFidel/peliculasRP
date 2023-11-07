import React from "react";
import "../App.css";
import { mainMovies } from "../service";

export const MainPeliculas = () => {
  const mainData = mainMovies();
  return (
    <>
      <h3>Recomendaciones</h3>
      <ul className="movies">
        {mainData.map((movie) => (
          <li className="movie" key={movie.ID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title}></img>
          </li>
        ))}
      </ul>
    </>
  );
};
