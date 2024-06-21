// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PodEpisode from "../Episode/PodEpisode";
import PropTypes from "prop-types";
import "../Season/PodSeason.css";

export default function PodSeason({ season }) {
  const { showId } = useParams();
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    (shows) => {
      fetch(
        "https://podcast-api.netlify.app/shows/${showId}/seasons/${season.seasonNumber}"
      )
        .then((res) => res.json())
        .then((data) => {
          setShows([
            ...shows,
            {
              ...data,
              episodes: data.episodes.map((episode) => ({
                ...episode,
                previewImage: `https://podcast-api.netlify.app/${episode.previewImage}`,
              })),
            },
          ]);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    },
    [showId, season]
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="PodSeason">
      <img src={props.image} className="seasons-img" />
      <h3>Season {season.seasonNumber}</h3>
      <Link to={`/shows/${showId}`}>Back to Show</Link>
      {shows.episodes.map((episode) => (
        <PodEpisode key={episode.episodeNumber} episode={episode} />
      ))}
    </div>
  );
}

PodSeason.propTypes = {
  season: PropTypes.node.isRequired,
  seasonNumber: PropTypes.node.isRequired,
};
