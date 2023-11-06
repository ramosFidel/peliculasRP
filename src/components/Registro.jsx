import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registroAuth } from "../service";

function Registro() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const redireccionLogin = (e) => {
    e.preventDefault();
    registroAuth(formData);
    navigate("/");
  };
  return (
    <div className="w-1/2 mx-auto mt-10 p-4 border rounded-lg">
      <div className="mb-4">
        <h2 className="text-2xl text-center">Bienvenido, Registrate Ahora</h2>
      </div>
      <div className="mb-4">
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 w-full"
          onClick={redireccionLogin}
        >
          Registrarse
        </button>
      </div>
    </div>
  );
}

export default Registro;
