import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PodDetails() {
  const { showId } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch(`/https://podcast-api.netlify.app/shows/${showId}`)
      .then((res) => res.json())
      .then((data) => setShow(data))
      .catch((error) => console.error("Error fetching show details:", error));
  }, [showId]);

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h2>{show.title}</h2>
      {show.seasons.map((season) => (
        <Season key={season.seasonNumber} season={season} />
      ))}
    </div>
  );
}

const Season = ({ season }) => (
  <div>
    <h3>Season {season.seasonNumber}</h3>
    {season.episodes.map((episode) => (
      <Episode key={episode.episodeNumber} episode={episode} />
    ))}
  </div>
);

const Episode = ({ episode }) => (
  <div>
    <h4>{episode.title}</h4>
    <AudioPlayer src={episode.audioUrl} />
  </div>
);

const AudioPlayer = ({ src }) => (
  <audio controls>
    <source src={src} type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
);
