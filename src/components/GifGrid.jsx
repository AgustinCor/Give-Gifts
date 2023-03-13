import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h4>{category}</h4>
       {
        isLoading 
        ? (<h2>Cargando...</h2>)
        : null
       }
       
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} image={image}/>
        ))}
      </div>
    </>
  );
};

export default GifGrid;
