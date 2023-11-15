import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registroAuth } from "../service";
import { Button, Input, Typography } from "@material-tailwind/react";

function Registro() {
  const [formData, setFormData] = useState({
    username: "",
    correo: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  const redireccionLogin = async (e) => {
    e.preventDefault();
    const register = await registroAuth(formData);
    if (register.success) {
      navigate("/login");
    }
    // console.log(formData);
  };
  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg shadow">
        <form className="p-12 md:p-24">
          <div className="mb-4">
            <h2 className="text-2xl font-semibold text-center">
              Bienvenido, Registrate Ahora
            </h2>
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
              name="correo"
              value={formData.correo}
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
          <div className="flex justify-start text-sm font-light">
            ¿Ya tienes una cuenta?
            <Link
              to="/login"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 underline"
            >
              Login aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registro;
