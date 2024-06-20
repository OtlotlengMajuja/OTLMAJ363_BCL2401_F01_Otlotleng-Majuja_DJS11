// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { createContext, useContext } from "react";

const AudioPlayerContext = createContext();

export const useAudioPlayer = () => useContext(AudioPlayerContext);

export function AudioPlayerProvider(children) {
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const playEpisode = (episode) => {
    setCurrentEpisode(episode);
  };

  return (
    <AudioPlayerContext.Provider value={{ currentEpisode, playEpisode }}>
      {children}
    </AudioPlayerContext.Provider>
  );
}
