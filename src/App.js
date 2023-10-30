import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { Movies } from "./components/Peliculas.jsx";
import { searchMovies } from "./service.js";
import { CarouselDefault } from "./components/CarouselDefault";
import { StickyNavbar } from "./components/StickyNavbar";
const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda no puede tener menos de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, error, setSearch };
};
const App = () => {
  const { search, setSearch, error } = useSearch();
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies(searchMovies(search));
  };
  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="">
      <header>
        <StickyNavbar></StickyNavbar>
      </header>
      <main className="container mx-auto mt-8">
        <CarouselDefault />
        <form onSubmit={handleSubmit}>
          <input
            name="title"
            type="text"
            onChange={handleOnchange}
            placeholder="Avengers, Star wars ..."
            value={search}
          />
          <input type="checkbox" name="sort" id="sort" />
          <button>Buscar</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="page ">
          <Movies movies={movies} />
        </div>
      </main>
    </div>
  );
};

export default App;
