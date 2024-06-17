import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Showlist from "./pages/Podcast/ShowList";
import Favourites from "./components/Favourites";
import PodDetails from "./pages/Podcast/PodDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Showlist shows={shows} />} />
        <Route path="/show/:showId" element={<PodDetails />} />
        <Route path="/favourites" element={<Favourites shows={shows} />} />
      </Routes>
    </BrowserRouter>
  );
}
