import React, { useState } from "react";
import noPeliculas from "../logo.svg";
import { ModalDescripcion } from "./ModalDescripcion.jsx";

function ListMovies({ movies }) {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpen = (movie) => {
    setSelectedMovie(movie);

    setOpen(!open);
  };
  return (
    <>
      <ul className="movies">
        {movies.map((movie) => (
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
}

function NoMovies() {
  return (
    <div class=" px-4 bg-white place-content-center">
      <div class="text-center w-auto mx-auto text-black sm:h-64">
        <img src={noPeliculas} alt="Pelicula no encontrada" />

        <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </h1>

        <p class="mt-4 text-gray-500">No pudimos encontrar la pelicula.</p>
      </div>
    </div>
  );
}

export function Movies({ movies }) {
  const hasResults = movies?.length > 0;
  return hasResults ? <ListMovies movies={movies} /> : <NoMovies />;
}
