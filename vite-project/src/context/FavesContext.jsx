import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

export default function useFaves(children) {
  const FavesContext = createContext();
  const [faves, setFaves] = useState([]);

  const addFavorite = (episode) => {
    setFaves((prevFaves) => [...prevFaves, episode]);
  };

  const removeFavorite = (episodeId) => {
    setFaves((prevFaves) => prevFaves.filter((ep) => ep.id !== episodeId));

    return (
      <FavesContext.Provider value={{ faves, addFavorite, removeFavorite }}>
        {children}
      </FavesContext.Provider>
    );
  };
}
