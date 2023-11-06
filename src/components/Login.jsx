import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import usuarios from "../mocks/with-results.json";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarioEncontrado = usuarios.usuarios.find(
      (usuario) =>
        usuario.username === username && usuario.password === password
    );

    if (usuarioEncontrado) {
      setLoggedIn(true);
      navigate("/catalogo");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setError("");
  };

  const redireccionRegistro = () => {
    navigate("/registro");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      {loggedIn ? (
        <div>
          <p className="text-xl">Bienvenido, {username}!</p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded mt-4"
            onClick={handleLogout}
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl mb-4">Bienvenido de vuelta</h2>
          <input
            className="border border-gray-300 rounded-md py-2 px-4 mb-2"
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <input
            className="border border-gray-300 rounded-md py-2 px-4 mb-4"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
            onClick={handleLogin}
          >
            Iniciar sesión
          </button>
          <br />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <br />
          <div>
            <button
              onClick={redireccionRegistro}
              className="mb-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-4 border border-gray-600 rounded-md"
            >
              ¿No tienes cuenta?, Regístrate
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
