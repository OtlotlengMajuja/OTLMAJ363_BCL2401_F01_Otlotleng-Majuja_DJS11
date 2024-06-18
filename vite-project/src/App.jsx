import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ShowList from "./pages/Podcast/ShowList";
import Favorites from "./components/Favorites";
import PodDetails from "./pages/Podcast/PodDetails";

export default function App() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        const sortedShows = data.sort((a, b) => a.title.localeCompare(b.title));
        setShows(sortedShows);
      })
      .catch((error) => console.error("Error fetching shows:", error));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ShowList shows={shows} />} />
        <Route path="/show/:showId" element={<PodDetails />} />
        <Route path="/favorites" element={<Favorites shows={shows} />} />
      </Routes>
    </BrowserRouter>
  );
}
