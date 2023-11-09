import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAuth } from "../service";
import { Button, Input } from "@material-tailwind/react";

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    // console.log(formData);
  };
  const navigate = useNavigate();

  const handleLogin = () => {
    const usuarioEncontrado = loginAuth(formData);

    if (usuarioEncontrado) {
      onLogin(usuarioEncontrado);
      navigate("/");
    } else {
      setError("Credenciales incorrectas");
    }
  };

  const redireccionRegistro = () => {
    navigate("/registro");
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="text-center mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <h2 className="text-2xl mb-4">Bienvenido</h2>
        <div className="mb-4">
          <Input
            label="Usuario"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={error}
          />
        </div>

        <div className="mb-4">
          <Input
            label="Contraseña"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={error}
          />
        </div>

        <div className="mb-4">
          <Button
            fullWidth
            variant="gradient"
            size="md"
            className=""
            onClick={handleLogin}
          >
            Registrarse
          </Button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <div className="mb-4">
          <Button
            fullWidth
            variant="outlined"
            size="md"
            className=""
            color="grey"
            onClick={redireccionRegistro}
          >
            ¿No tienes cuenta?, Regístrate
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
