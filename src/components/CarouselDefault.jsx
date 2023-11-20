import { Carousel } from "@material-tailwind/react";
import { carouselPeli } from "../service.js";
import React, { useEffect, useState } from "react";

export function CarouselDefault() {
  const [peli, setPeli] = useState([]);
  useEffect(() => {
    async function carousel() {
      try {
        const data = await carouselPeli();
        setPeli(data.data);
      } catch (error) {
        console.log(error);
      }
    }
    carousel();
  }, []);
  return (
    <>
      {peli && (
        <Carousel className="rounded-xl" autoplay={true} loop={true}>
          {peli.map((el) => (
            <img
              src={el.Poster}
              alt="a"
              className="h-52 w-full object-cover"
            ></img>
          ))}
        </Carousel>
      )}
    </>
  );
}
