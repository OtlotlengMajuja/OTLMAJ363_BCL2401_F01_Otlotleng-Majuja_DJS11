import React from "react";
import { useFaves } from "../../context/FavesContext";

export default function PodEpisode(episode) {
  const { faves, addFavorite, removeFavorite } = useFaves();
  const isFavorite = faves.some((fav) => fav.id === episode.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(episode.id);
    } else {
      addFavorite(episode);
    }
  };

  return (
    <div>
      <h4>{episode.title}</h4>
      <audio controls>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
