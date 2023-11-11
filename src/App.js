import React, { useState } from "react";
import "./App.css";
import Peliculas from "./components/Peliculas.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";
import { Perfil } from "./components/Perfil.jsx";
import { StickyNavbar } from "./components/StickyNavbar.jsx";
import { useSearch } from "./hooks/useSearch.js";
import { useMovies } from "./hooks/useMovies";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isinCuenta, setIsInCuenta] = useState(false);

  const { search, setSearch } = useSearch();
  const { movies, getMovies, loading } = useMovies({
    search,
    setIsSearching,
  });
  const location = useLocation();
  const allowedRoutes = ["/login", "/registro"];
  const showNavbar = !allowedRoutes.includes(location.pathname);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
  return (
    <div className="App ">
      {showNavbar && (
        <header>
          <StickyNavbar
            setIsSearching={setIsSearching}
            setSearch={setSearch}
            isinCuenta={isinCuenta}
            getMovies={getMovies}
            setIsInCuenta={setIsInCuenta}
            currentUser={currentUser}
            onLogout={handleLogout}
          ></StickyNavbar>
        </header>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Peliculas
              currentUser={currentUser}
              onLogout={handleLogout}
              isSearching={isSearching}
              movies={movies}
            />
          }
        />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} currentUser={currentUser} />}
        />
        <Route path="/registro" element={<Registro />} />
        <Route
          path="/perfil"
          element={<Perfil currentUser={currentUser} onLogout={handleLogout} />}
        />
      </Routes>
    </div>
  );
}

export default App;
