import React from "react";
import { BrowserRouter, Routes, Route /*Link*/ } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
