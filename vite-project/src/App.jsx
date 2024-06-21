// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LoadState from "./pages/Podcast/Loadstate/LoadState";
import ShowList from "./pages/Podcast/Showlist/ShowList";
import PodDetails from "./pages/Podcast/PodDetails";
import PodSeason from "./pages/Podcast/Season/PodSeason";
import GroupedFaves from "./components/GroupedFaves";
import AudioPlayer from "./components/AudioPlayer";
import { FavoritesProvider } from "./context/FavesContext";
import { AudioPlayerProvider } from "./context/AudioPlayerContext";

export default function App() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <FavoritesProvider>
      <AudioPlayerProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <LoadState loading={loading} error={error}>
                  <ShowList shows={shows} />
                </LoadState>
              }
            />
            <Route path="/show/:showId" element={<PodDetails />} />
            <Route
              path="/show/:showId/season/:seasonNumber"
              element={<PodSeason />}
            />
            <Route path="/favorites" element={<GroupedFaves />} />
          </Routes>
          <AudioPlayer />
        </BrowserRouter>
      </AudioPlayerProvider>
    </FavoritesProvider>
  );
}
