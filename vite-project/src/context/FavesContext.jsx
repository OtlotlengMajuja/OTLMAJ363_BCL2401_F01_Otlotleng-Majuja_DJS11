// eslint-disable-next-line no-unused-vars
import React from "react";
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const FavesContext = createContext();

export const useFavorites = () => useContext(FavesContext);

export default function FavoritesProvider(children) {
  const [faves, setFaves] = useState(() => {
    const storedFaves = localStorage.getItem("favorites");
    return storedFaves ? JSON.parse(storedFaves) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(faves));
  }, [faves]);

  const addFavorite = (episode, showTitle, seasonNumber) => {
    setFaves([
      ...faves,
      { ...episode, showTitle, seasonNumber, addedAt: new Date() },
    ]);
  };

  const removeFavorite = (episodeId) => {
    setFaves(faves.filter((fav) => fav.id !== episodeId));
  };

  const clearFaves = () => {
    setFaves([]);
  };

  return (
    <FavesContext.Provider
      value={{ faves, addFavorite, removeFavorite, clearFaves }}
    >
      {children}
    </FavesContext.Provider>
  );
}
