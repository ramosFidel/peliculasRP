import React, { useState } from "react";
import "../App.css";
import { mainMovies } from "../service";
import { ModalDescripcion } from "./ModalDescripcion.jsx";

export const MainPeliculas = () => {
  const mainData = mainMovies();
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpen = (movie) => {
    setSelectedMovie(movie);

    setOpen(!open);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5 ">Peliculas recomendadas</h2>
      <ul className="movies">
        {mainData.map((movie) => (
          <li
            className="movie rounded-lg shadow-lg"
            key={movie.ID}
            onClick={() => handleOpen(movie)}
          >
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title}></img>
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <ModalDescripcion
          open={open}
          handleOpen={handleOpen}
          selectedMovie={selectedMovie}
        />
      )}
    </>
  );
};
