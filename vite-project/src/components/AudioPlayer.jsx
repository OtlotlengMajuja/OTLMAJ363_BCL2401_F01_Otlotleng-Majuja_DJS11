// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer(episode) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  if (!episode) return null;

  return (
    <div className="audio-player">
      <h4>Now Playing: {episode.title}</h4>
      <audio controls autoPlay>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
