import React, { useState, useEffect } from "react";
import "../App.css";
import { mainMovies } from "../service";
import { ModalDescripcion } from "./ModalDescripcion.jsx";

export const MainPeliculas = () => {
  const [peli, setPeli] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    async function mainPeli() {
      try {
        const data = await mainMovies();
        setPeli(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    mainPeli();
  }, []);
  const handleOpen = (movie) => {
    setSelectedMovie(movie);

    setOpen(!open);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5 ">Peliculas recomendadas</h2>
      <ul className="movies">
        {peli &&
          peli.map((movie) => (
            <li
              className="movie rounded-lg shadow-lg cursor-pointer"
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
