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

  return (
    <div>
      <h2>Favorites</h2>
      {Object.keys(groupedFavorites).length === 0 ? (
        <p>No favorite episodes yet.</p>
      ) : (
        Object.keys(groupedFavorites).map((key) => (
          <div key={key}>
            <h3>{key}</h3>
            {groupedFavorites[key].map((episode) => (
              <div key={episode.id}>
                <h4>{episode.title}</h4>
                <audio controls>
                  <source src={episode.audioUrl} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <button onClick={() => removeFavorite(episode.id)}>
                  Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
}
