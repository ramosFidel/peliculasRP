import { useRef, useState, useEffect } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("No se puede buscar una pelicula vacia");
      return;
    }
    if (search.length < 3) {
      setError("La busqueda no puede tener menos de 3 caracteres");
      return;
    }
    setError(null);
  }, [search]);

  return { search, error, setSearch };
};
