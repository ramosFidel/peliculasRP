import React from "react";
import "./App.css";
import Peliculas from "./components/Peliculas.jsx"
import { Routes, Route, BrowserRouter,} from "react-router-dom";
import Login from "./components/Login.jsx";
import Registro from "./components/Registro.jsx";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path="catalogo" element={<Peliculas />} />
      <Route path="/" element={<Login />} />
      <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;