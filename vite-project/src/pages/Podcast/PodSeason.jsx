// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Episode from "./PodEpisode";
import PropTypes from "prop-types";

export default function PodSeason({ season, seasonNumber }) {
  const { showId } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(
      "https://podcast-api.netlify.app/shows/${showId}/seasons/${season.seasonNumber}"
    )
      .then((res) => res.json())
      .then((data) => {
        setEpisodes(data.episode);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [showId, season]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h3>Season {season.seasonNumber}</h3>
      <Link to={`/shows/${showId}`}>Back to Show</Link>
      {episodes.map((episode) => (
        <Episode key={episode.episodeNumber} episode={episode} />
      ))}
    </div>
  );
}

PodSeason.propTypes = {
  season: PropTypes.node.isRequired,
  seasonNumber: PropTypes.node.isRequired,
};
