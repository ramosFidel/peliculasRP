import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Search } from "./Search.jsx";

export function StickyNavbar({
  getMovies,
  isinCuenta,
  currentUser,
  onLogout,
  setIsInCuenta,
  setIsSearching,
  setSearch,
}) {
  const [openNav, setOpenNav] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout(null);
    setIsSearching(false);
    navigate("/login");
  };
  const handleLogin = () => {
    setIsSearching(false);
    navigate("/login");
  };
  const handleSingin = () => {
    setIsSearching(false);
    navigate("registro");
  };
  const handleMainPeliculas = () => {
    setIsInCuenta(false);
    setIsSearching(false);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsInCuenta(false)}
        >
          Peliculas
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/aboutus"
          className="flex items-center"
          onClick={() => setIsInCuenta(false)}
        >
          About Us
        </Link>
      </Typography>
      {currentUser && (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
        >
          <Link
            to="/perfil"
            className="flex items-center"
            onClick={() => setIsInCuenta(true)}
          >
            Cuenta
          </Link>
        </Typography>
      )}
    </ul>
  );

  return (
    <div className="bg-white">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-12 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link
            as="a"
            to="/"
            className="mr-4 ml-2 cursor-pointer py-1.5 font-bold"
            onClick={handleMainPeliculas}
          >
            Grupo DINAMITA
          </Link>

          {isinCuenta || (
            <Search
              style={"hidden items-center gap-x-2 lg:flex"}
              // style={`${isinCuenta ? "hidden" : ""} items-center flex gap-x-2 `}
              getMovies={getMovies}
            />
          )}

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <div className="flex items-center gap-x-1">
              {currentUser ? (
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  onClick={handleLogout}
                >
                  Cerrar sesion
                </Button>
              ) : (
                <>
                  <Button
                    variant="text"
                    onClick={handleLogin}
                    className="hidden lg:inline-block"
                    size="sm"
                  >
                    Iniciar sesión
                  </Button>
                  <Button
                    onClick={handleSingin}
                    className="hidden lg:inline-block"
                    size="sm"
                  >
                    Registrate
                  </Button>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <Search
            style={"flex flex-col gap-x-2 sm:flex-row sm:items-center"}
            getMovies={getMovies}
          />

          {navList}

          <div className="flex items-center gap-x-1">
            {currentUser ? (
              <Button
                fullWidth
                variant="text"
                size="sm"
                className=""
                onClick={handleLogout}
              >
                Cerrar sesion
              </Button>
            ) : (
              <>
                <Button
                  fullWidth
                  variant="text"
                  size="sm"
                  onClick={handleLogin}
                  className=""
                >
                  Iniciar sesión
                </Button>
                <Button
                  onClick={handleSingin}
                  fullWidth
                  variant="gradient"
                  size="sm"
                  className=""
                >
                  Registrate
                </Button>
              </>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}
