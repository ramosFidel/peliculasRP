import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  };
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const data = await loginAuth(formData);

      if (data.success) {
        onLogin(data.data[0]);
        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden flex items-center justify-center">
      <div className="bg-white p-6 space-y-4 md:space-y-6 sm:p-8 rounded-lg shadow">
        <form className="p-10 md:p-20">
          <h2 className="text-2xl font-semibold mb-4">Bienvenido, Login</h2>
          <div className="mb-4">
            <Input
              label="Usuario"
              name="username"
              value={formData.username}
              onChange={handleChange}
              error={error}
              containerProps={{ className: "min-w-[250px]" }}
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
              containerProps={{ className: "min-w-[250px]" }}
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
          <div className="mb-4 text-sm font-light">
            ¿No tienes cuenta aún?,
            <Link
              to="/registro"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 underline"
            >
              Regístrate
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
