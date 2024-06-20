// eslint-disable-next-line no-unused-vars
import React from "react";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer(episode) {
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);
    const handleBeforeUnload = (e) => {
      if (audio && !audio.paused) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    if (audio) {
      audio.addEventListener("timeupdate", updateTime);
      window.addEventListener("beforeunload", handleBeforeUnload);
      return () => {
        audio.removeEventListener("timeupdate", updateTime);
        window.removeEventListener("beforeunload", handleBeforeUnload);
      };
    }
  }, [audioRef]);

  if (!episode) return null;

  return (
    <div className="audio-player">
      <h4>Now Playing: {episode.title}</h4>
      <audio controls ref={audioRef} autoPlay>
        <source src={episode.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
        <div>Progress: {Math.floor(currentTime)} seconds</div>
      </audio>
    </div>
  );
}
