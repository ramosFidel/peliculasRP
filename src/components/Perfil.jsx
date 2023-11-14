import React, { useEffect, useState } from "react";
import { updateUserAuth } from "../service.js";
import { Button, Input } from "@material-tailwind/react";

function EditarPerfil({ currentUser, setCurrentUser }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleActualiza = (e) => {
    e.preventDefault();
    let idCurrentUser = currentUser.id;
    // console.log(currentUser.id);

    //Funcion que actualiza el user
    const updateUser = updateUserAuth(formData, idCurrentUser);

    setCurrentUser({ ...currentUser, ...formData });
    // console.log(formData);
  };
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Editar el perfil</h2>
      <form className="max-w-md mx-auto flex flex-col gap-5">
        <div className="mb-4">
          <label>Usuario</label>
          <Input
            name="username"
            placeholder={currentUser && currentUser.username}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label>Email Address</label>
          <Input
            name="email"
            type="email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            placeholder={currentUser && currentUser.email}
            labelProps={{
              className: "hidden",
            }}
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Button
            fullWidth
            variant="gradient"
            size="sm"
            className=""
            onClick={handleActualiza}
          >
            Guardar Cambios
          </Button>
        </div>
      </form>
    </div>
  );
}
function CambioContrasena({ currentUser, setCurrentUser }) {
  const [formData, setFormData] = useState({
    contra: "",
    contraConf: "",
  });
  const [contra, setContra] = useState(true);
  const [contraConf, setContraconf] = useState(true);

  const handleContra = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formData.contra === formData.contraConf) {
      setContraconf(true);
    } else {
      setContraconf(false);
    }
  };
  //Falta funcionalidad
  const GuardaContra = () => {};
  const oldContra = (e) => {
    if (currentUser.password === e.target.value) {
      setContra(false);
    } else {
      setContra(true);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cambio de contraseña
      </h2>
      <form className="max-w-md mx-auto flex flex-col gap-3">
        <div className="mb-4">
          <label>Antigua contraseña</label>

          <Input
            type="password"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            onChange={oldContra}
          />
        </div>
        <div className="mb-4">
          <label>Nueva contraseña</label>

          <Input
            type="password"
            name="contra"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            disabled={contra}
            value={formData.contra}
            onChange={handleContra}
          />
        </div>
        <div className="mb-4">
          <label>Confirmar nueva contraseña</label>
          <Input
            type="password"
            name="contraConf"
            disabled={contra}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            value={formData.contraConf}
            onChange={handleContra}
          />
        </div>

        <Button
          fullWidth
          variant="gradient"
          size="sm"
          className=""
          onClick={GuardaContra}
          disabled={contra || contraConf}
        >
          Cambiar contraseña
        </Button>
      </form>
    </div>
  );
}
function Nocuenta() {
  return <>No tiene cuenta</>;
}
export const Perfil = ({ currentUser, setCurrentUser }) => {
  const [componenteActivo, setComponenteActivo] = useState("EditarPerfil");
  const editarClick = () => {
    setComponenteActivo("EditarPerfil");
  };
  const cambiarClick = () => {
    setComponenteActivo("CambiarContrasena");
  };
  console.log(currentUser);
  return (
    <>
      {true ? (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      alt="avatar"
                      src="https://randomuser.me/api/portraits/men/94.jpg"
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold">
                      {currentUser && currentUser.username}
                    </h1>
                    <p className="text-gray-600">
                      {currentUser && currentUser.email}
                    </p>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-600 uppercase font-bold tracking-wider mb-2">
                      Configuraciones adicionales
                    </span>
                    <ul>
                      <li className="mb-2 cursor-pointer" onClick={editarClick}>
                        Detalles de la cuenta
                      </li>
                      <li
                        className="mb-2 cursor-pointer"
                        onClick={cambiarClick}
                      >
                        Cambiar contraseña
                      </li>
                      <Button
                        fullWidth
                        variant="text"
                        size="sm"
                        className="mb-2"
                      >
                        Eliminar cuenta
                      </Button>
                      <Button
                        fullWidth
                        variant="gradient"
                        size="sm"
                        className=""
                      >
                        Cerrar sesión
                      </Button>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9 ">
                {componenteActivo === "EditarPerfil" ? (
                  <EditarPerfil
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                ) : (
                  <CambioContrasena
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Nocuenta></Nocuenta>
      )}
    </>
  );
};
