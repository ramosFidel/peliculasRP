import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { Movies } from "./components/Peliculas.jsx";
import { searchMovies } from "./service.js";
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
    <div className="page">
      <header>
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
      </header>
      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
};

export default App;
