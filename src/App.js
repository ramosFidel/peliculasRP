import React, { useState } from "react";
import "./App.css";
import Peliculas from "./components/Peliculas.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleLogin = (user) => {
    setCurrentUser(user);
  };

  const handleLogout = () => {
    setCurrentUser(null);
  };
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="catalogo"
            element={
              <Peliculas currentUser={currentUser} onLogout={handleLogout} />
            }
          />
          <Route
            path="/"
            element={<Login onLogin={handleLogin} currentUser={currentUser} />}
          />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
