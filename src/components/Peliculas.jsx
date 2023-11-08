import React, { useState } from "react";
import "../App.css";
import { Movies } from "./Catalogo.jsx";
import { MainPeliculas } from "./MainPeliculas.jsx";

import { CarouselDefault } from "./CarouselDefault";
import { StickyNavbar } from "./StickyNavbar";
import { useSearch } from "../hooks/useSearch";
import { useMovies } from "../hooks/useMovies";
const App = ({ currentUser, onLogout }) => {
  const [isSearching, setIsSearching] = useState(false);
  const { search } = useSearch();
  const { movies, getMovies, loading } = useMovies({
    search,
    setIsSearching,
  });
  // console.log(mainData);

  return (
    <div className="">
      <header>
        <StickyNavbar
          getMovies={getMovies}
          setIsSearching={setIsSearching}
          currentUser={currentUser}
          onLogout={onLogout}
        ></StickyNavbar>
      </header>
      <main className="container mx-auto mt-8">
        <CarouselDefault />

        <div className="page ">
          {isSearching ? <Movies movies={movies} /> : <MainPeliculas />}
        </div>
      </main>
    </div>
  );
};

export default App;
