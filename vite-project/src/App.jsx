import React from "react";
import { BrowserRouter, Routes, Route /*Link*/ } from "react-router-dom";
import { PodcastDetails } from "./pages/Podcast/PodcastDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
