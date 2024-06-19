import React from "react";
import { useFaves } from "../context/FavesContext";
import PodEpisode from "../pages/Podcast/PodEpisode";

export default function Faves() {
  const { faves } = useFaves();

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
