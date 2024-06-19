// eslint-disable-next-line no-unused-vars
import React from "react";
import { createContext, useContext } from "react";
import { useState } from "react";

const FavesContext = createContext();

export const useFavorites = () => useContext(FavesContext);

export const FavoritesProvider = ({ children }) => {
  const [faves, setFaves] = useState([]);

  const addFavorite = (episode, showTitle, seasonNumber) => {
    setFaves((prevFaves) => [
      ...prevFaves,
      { ...episode, showTitle, seasonNumber },
    ]);
  };

  const removeFavorite = (episodeId) => {
    setFaves((prevFaves) => prevFaves.filter((ep) => ep.id !== episodeId));
  };

  return (
    <FavesContext.Provider value={{ faves, addFavorite, removeFavorite }}>
      {children}
    </FavesContext.Provider>
  );
};
