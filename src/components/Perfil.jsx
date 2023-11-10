import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";

function EditarPerfil({ currentUser }) {
  const handleActualiza = () => {};
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Editar el perfil</h2>
      <form className="max-w-md mx-auto flex flex-col gap-5">
        <div className="mb-4">
          <label>Usuario</label>
          <Input
            placeholder={currentUser && currentUser.username}
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="mb-4">
          <label>Email Address</label>
          <Input
            type="email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            placeholder={currentUser && currentUser.email}
            labelProps={{
              className: "hidden",
            }}
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
function CambioContrasena({ currentUser }) {
  const [formData, setFormData] = useState({
    contra: "",
    contraConf: "",
  });
  const [contra, setContra] = useState(false);

  const handleContra = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const GuardaContra = () => {
    setContra(false);
  };
  const oldContra = (e) => {
    console.log(e.target.value);
  };
  useEffect(() => {
    setContra(formData.contra !== formData.contraConf);
  }, [formData]);
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
            value={formData.contra}
            onChange={handleContra}
          />
        </div>
        <div className="mb-4">
          <label>Confirmar nueva contraseña</label>
          <Input
            type="password"
            name="contraConf"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "hidden",
            }}
            value={formData.contraConf}
            onChange={handleContra}
            error={contra}
          />
        </div>

        <Button
          fullWidth
          variant="gradient"
          size="sm"
          className=""
          onClick={GuardaContra}
          disabled={contra}
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
export const Perfil = ({ currentUser }) => {
  const [componenteActivo, setComponenteActivo] = useState("EditarPerfil");
  const editarClick = () => {
    setComponenteActivo("EditarPerfil");
  };
  const cambiarClick = () => {
    setComponenteActivo("CambiarContrasena");
  };
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
                  <EditarPerfil currentUser={currentUser} />
                ) : (
                  <CambioContrasena currentUser={currentUser} />
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
