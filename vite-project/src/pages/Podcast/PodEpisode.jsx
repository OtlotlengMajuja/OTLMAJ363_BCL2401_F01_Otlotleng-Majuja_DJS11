// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState, useParams } from "react";
import { useFavorites } from "../../context/FavesContext";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

export default function PodEpisode(episode, showTitle, seasonNumber) {
  const { faves, addFavorite, removeFavorite } = useFavorites();
  const { playEpisode } = useAudioPlayer();
  const { showId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const response = await fetch(
          `https://podcast-api.netlify.app/shows/${showId}/seasons/${seasonNumber}`
        );
        const data = await response.json();
        setEpisodes(data.episodes);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchEpisodes();
  }, [showId, seasonNumber]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const isFavorite = faves.some((fav) => fav.id === episode.id);
  const completedEpisodes =
    JSON.parse(localStorage.getItem("completedEpisodes")) || [];
  const isCompleted = completedEpisodes.includes(episode.id);

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
      <h4>
        {episode.title} {isCompleted && <span>(Completed)</span>}
      </h4>
      <img src={episode.previewImage} alt={episode.title} />
      <p>{episode.description}</p>
      <button onClick={handlePlay}>Play</button>
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
