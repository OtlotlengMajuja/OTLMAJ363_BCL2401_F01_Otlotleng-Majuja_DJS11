import React, { useState, useEffect } from "react";
import { Header } from ".../components/Header";
import { ShowList } from "./ShowList";

export default function App() {
  const [shows, setShows] = useState([]);

  const fetchShows = async () => {
    try {
      const response = await fetch("https://podcast-api.netlify.app");
      const data = await response.json();
      return data.sort((a, b) => a.title.localeCompare(b.title));
    } catch (error) {
      console.error("Error fetching shows:", error);
      return [];
    }
  };

  useEffect(() => {
    fetchShows().then((data) => setShows(data));
  }, []);

  return (
    <div>
      <Header />
      <ShowList shows={shows} />
    </div>
  );
}
