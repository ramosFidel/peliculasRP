import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";

function EditarPerfil() {
  const handleActualiza = () => {};
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Editar el perfil</h2>
      <form className="max-w-md mx-auto flex flex-col gap-5">
        <div className="mb-4">
          <Input label="Usuario" />
        </div>
        <div className="mb-4">
          <Input type="email" label="Email Address" />
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
function CambioContrasena() {
  const handleContra = () => {};
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Cambio de contraseña
      </h2>
      <form className="max-w-md mx-auto flex flex-col gap-3">
        <div className="mb-4">
          <Input label="Antigua contraseña" type="password" />
        </div>
        <div className="mb-4">
          <Input label="Nueva contraseña" type="password" />
        </div>
        <div className="mb-4">
          <Input label="Confirmar nueva contraseña" type="password" />
        </div>

        <Button
          fullWidth
          variant="gradient"
          size="sm"
          className=""
          onClick={handleContra}
        >
          Cambiar contraseña
        </Button>
      </form>
    </div>
  );
}
export const Perfil = () => {
  const [componenteActivo, setComponenteActivo] = useState("EditarPerfil");
  const editarClick = () => {
    setComponenteActivo("EditarPerfil");
  };
  const cambiarClick = () => {
    setComponenteActivo("CambiarContrasena");
  };
  return (
    <div className="bg-gray-100">
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
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-gray-600">john@email.com</p>
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
                  <li className="mb-2 cursor-pointer" onClick={cambiarClick}>
                    Cambiar contraseña
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9 ">
            {componenteActivo === "EditarPerfil" ? (
              <EditarPerfil />
            ) : (
              <CambioContrasena />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
