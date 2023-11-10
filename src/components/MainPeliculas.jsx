import React from "react";
import "../App.css";
import { mainMovies } from "../service";

export const MainPeliculas = () => {
  const mainData = mainMovies();
  return (
    <>
      <h2 className="text-2xl font-bold mb-5 ">Peliculas recomendadas</h2>
      <ul className="movies">
        {mainData.map((movie) => (
          <li className="movie rounded-lg shadow-lg" key={movie.ID}>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title}></img>
          </li>
        ))}
      </ul>
    </>
  );
};
