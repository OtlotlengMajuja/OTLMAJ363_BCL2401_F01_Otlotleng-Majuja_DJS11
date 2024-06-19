// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFavorites } from "../../context/FavesContext";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

export default function PodEpisode(episode, showTitle, seasonNumber) {
  const { faves, addFavorite, removeFavorite } = useFavorites();
  const { playEpisode } = useAudioPlayer();

  const isFavorite = faves.some((fav) => fav.id === episode.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(episode.id);
    } else {
      addFavorite(episode, showTitle, seasonNumber);
    }
  };

  const handlePlay = () => {
    playEpisode(episode);
  };

  return (
    <div>
      <h4>{episode.title}</h4>
      <button onClick={handlePlay}>Play</button>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
