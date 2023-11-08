import React from "react";
import "../App.css";
import { Movies } from "./Catalogo.jsx";
import { MainPeliculas } from "./MainPeliculas.jsx";
import { CarouselDefault } from "./CarouselDefault";

const App = ({ movies, isSearching }) => {
  return (
    <>
      <main className="container mx-auto mt-8">
        <CarouselDefault />
        <div className="page ">
          {isSearching ? <Movies movies={movies} /> : <MainPeliculas />}
        </div>
      </main>
    </>
  );
};

export default App;
