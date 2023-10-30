import React from "react";
import { Button, Input } from "@material-tailwind/react";

export function Search({ style }) {
  return (
    <div className={style}>
      <div className="relative flex w-full gap-2 md:w-max">
        <Input
          type="search"
          placeholder="Search"
          containerProps={{
            className: "min-w-[288px]",
          }}
          className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
        />
      </div>
      <Button size="md" className="rounded-lg ">
        Search
      </Button>
    </div>
  );
}
