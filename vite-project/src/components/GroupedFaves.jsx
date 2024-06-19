import { useState } from "react";
import { useFavorites } from "../context/FavesContext";

export default function GroupedFaves() {
  const { faves, removeFavorite } = useFavorites();
  const [sortOption, setSortOption] = useState("most_recent");

  const groupedFavorites = faves.reduce((acc, episode) => {
    const key = `${episode.showTitle} - Season ${episode.seasonNumber}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(episode);
    return acc;
  }, {});

  const sortFavorites = (episodes) => {
    if (sortOption === "title_az") {
      return episodes.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title_za") {
      return episodes.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "most_recent") {
      return episodes.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt));
    } else if (sortOption === "furthest back") {
      return episodes.sort((a, b) => new Date(a.addedAt) - new Date(b.addedAt));
    }
    return episodes;
  };

  return (
    <div>
      <h2>Favorites</h2>
      <div>
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="most_recent">Most Recent</option>
          <option value="furthest_back">Furthest Back</option>
          <option value="title_az">Title A-Z</option>
          <option value="title_za">Title Z-A</option>
        </select>
      </div>
      {Object.keys(groupedFavorites).length === 0 ? (
        <p>No favorite episodes yet.</p>
      ) : (
        Object.keys(groupedFavorites).map((key) => {
          const episodes = sortFavorites(groupedFavorites[key]);
          return (
            <div key={key}>
              <h3>{key}</h3>
              {episodes.map((episode) => (
                <div key={episode.id}>
                  <h4>{episode.title}</h4>
                  <p>Added on: {new Date(episode.addedAt).toLocaleString()}</p>
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
          );
        })
      )}
    </div>
  );
}
