import React from "react";
import { BrowserRouter, Routes, Route /*Link*/ } from "react-router-dom";
import Header from "./components/Header";
import Showlist from "./pages/Podcast/ShowList";
import Favourites from "./components/Favourites";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Showlist shows={shows} />} />
        <Route path="/favourites" element={<Favourites shows={shows} />} />
      </Routes>
    </BrowserRouter>
  );
}
