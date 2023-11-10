import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registroAuth } from "../service";
import { Button, Input, Typography } from "@material-tailwind/react";

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
    // console.log(formData);
    navigate("/login");
  };
  return (
    <div className="w-1/2 mx-auto mt-10 p-4 border rounded-lg gap-6 flex flex-col">
      <div className="mb-4">
        <h2 className="text-2xl text-center">Bienvenido, Registrate Ahora</h2>
      </div>
      <div className="mb-4">
        <Input
          label="Nombre de usuario"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Correo electrónico"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Button
          fullWidth
          variant="gradient"
          size="md"
          className=""
          onClick={redireccionLogin}
        >
          Registrarse
        </Button>
      </div>
      <div className="flex justify-center">
        ¿Ya tienes una cuenta?
        <Link
          to="/login"
          className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 underline"
        >
          Login aquí
        </Link>
      </div>
    </div>
  );
}

export default Registro;
