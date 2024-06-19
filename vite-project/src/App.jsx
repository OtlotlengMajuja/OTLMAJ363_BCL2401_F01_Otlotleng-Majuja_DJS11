// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ShowList from "./pages/Podcast/ShowList";
import PodDetails from "./pages/Podcast/PodDetails";
import PodSeason from "./pages/Podcast/PodSeason";
import GroupedFaves from "./components/GroupedFaves";
import { FavoritesProvider } from "./context/FavesContext";

export default function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((res) => res.json())
      .then((data) => {
        setShows(data);
      })
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList shows={shows} />} />
          <Route path="/show/:showId" element={<PodDetails />} />
          <Route
            path="/show/:showId/season/:seasonNumber"
            element={<PodSeason />}
          />
          <Route path="/favorites" element={<GroupedFaves />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}
