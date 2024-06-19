// eslint-disable-next-line no-unused-vars
import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

const FavesContext = createContext();

export const useFavorites = () => useContext(FavesContext);

export default function FavoritesProvider(children) {
  const [faves, setFaves] = useState([]);

  const addFavorite = (episode, showTitle, seasonNumber) => {
    const newFavorite = {
      ...episode,
      showTitle,
      seasonNumber,
      addedAt: new Date().toISOString(), // Add timestamp
    };
    setFaves((prevFaves) => [...prevFaves, newFavorite]);
  };

  const removeFavorite = (episodeId) => {
    setFaves((prevFaves) => prevFaves.filter((ep) => ep.id !== episodeId));
  };

  return (
    <FavesContext.Provider value={{ faves, addFavorite, removeFavorite }}>
      {children}
    </FavesContext.Provider>
  );
}
