import React from "react";
import { Link, useParams } from "react-router-dom";
import Episode from "./PodEpisode";

const Season = ({ season }) => {
  const { showId } = useParams();

  return (
    <div>
      <h3>Season {season.seasonNumber}</h3>
      <Link to={`/show/${showId}`}>Back to Show</Link>
      {season.episodes.map((episode) => (
        <Episode key={episode.episodeNumber} episode={episode} />
      ))}
    </div>
  );
};

export default Season;
