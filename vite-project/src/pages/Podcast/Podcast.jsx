import React from "react";
import { useState, useEffect } from "react";
import { Header } from ".../components/Header";
import { ShowList } from "./ShowList";

export default function App() {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    try {
      const res = await fetch("https://podcast-api.netlify.app");
      const data = await res.json();
      return data.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
      console.error("Error fetching shows:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchShows().then((sortedShows) => setShows(sortedShows));
  }, []);

  return (
    <div>
      <Header />
      <ShowList shows={shows} />
    </div>
  );
}
