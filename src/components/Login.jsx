import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../service";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarioEncontrado = loginAuth(formData);

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado);
      navigate("/catalogo");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const redireccionRegistro = () => {
    navigate("/registro");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center">
        <h2 className="text-2xl mb-4">Bienvenido</h2>
        <input
          className="border border-gray-300 rounded-md py-2 px-4 mb-2"
          type="text"
          placeholder="Usuario"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          className="border border-gray-300 rounded-md py-2 px-4 mb-4"
          type="password"
          placeholder="Contraseña"
          name="password"
          value={formData.password}
          onChange={handleChange}
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
    </div>
  );
}

export default Login;
