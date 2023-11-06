import React from "react";
import "../App.css";
import { Movies } from "./Catalogo.jsx";

import { CarouselDefault } from "./CarouselDefault";
import { StickyNavbar } from "./StickyNavbar";
import { useSearch } from "../hooks/useSearch";
import { useMovies } from "../hooks/useMovies";

const App = () => {
  const { search } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search });

  return (
    <div className="">
      <header>
        <StickyNavbar getMovies={getMovies}></StickyNavbar>
      </header>
      <main className="container mx-auto mt-8">
        <CarouselDefault />

        <div className="page ">
          <Movies movies={movies} />
        </div>
      </main>
    </div>
  );
};

export default App;
