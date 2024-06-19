// eslint-disable-next-line no-unused-vars
import React from "react";
import { useFavorites } from "../context/FavesContext";
import PodEpisode from "../pages/Podcast/PodEpisode";

export default function Faves() {
  const { faves } = useFavorites();

  return (
    <div>
      <h2>Favorites</h2>
      {faves.length === 0 ? (
        <p>No favorite episodes yet.</p>
      ) : (
        faves.map((episode) => (
          <PodEpisode key={episode.id} episode={episode} />
        ))
      )}
    </div>
  );
}
