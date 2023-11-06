import React, { useRef, useState, useEffect } from "react";
import "../App.css";
import { searchMovies } from "../service.js";
import { CarouselDefault } from "./CarouselDefault";
import Login from "./Login.jsx";
import { StickyNavbar } from "./StickyNavbar";
import { Movies } from "./Catalogo.jsx";

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
      setError("No se puede buscar una película vacía");
      return;
    }
    if (search.length < 3) {
      setError("La búsqueda no puede tener menos de 3 caracteres");
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
          <CarouselDefault></CarouselDefault>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <div className="page">
          <Movies movies={movies} />
          </div>
        </main>
      </div>
  );
};

export default App;
