import React, { useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { useSearch } from "../hooks/useSearch";
import { useMovies } from "../hooks/useMovies";
export function Search({ style, getMovies }) {
  const { search, setSearch, error } = useSearch();
  // const [movies, setMovies] = useState([]);
  // const { movies, getMovies, loading } = useMovies({ search });

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(search);
  };
  const handleOnchange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={style}>
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          name="title"
          type="search"
          placeholder="Search"
          onChange={handleOnchange}
          containerProps={{
            className: "min-w-[288px]",
          }}
          className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Button size="md" className="rounded-lg " onClick={handleSubmit}>
        Search
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
