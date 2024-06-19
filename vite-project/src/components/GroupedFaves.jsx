import React from "react";
import { useFavorites } from "../context/FavesContext";

export default function GroupedFaves() {
  const { favorites, removeFavorite } = useFavorites();

  const groupedFavorites = favorites.reduce((acc, episode) => {
    const key = `${episode.showTitle} - Season ${episode.seasonNumber}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(episode);
    return acc;
  }, {});
}
