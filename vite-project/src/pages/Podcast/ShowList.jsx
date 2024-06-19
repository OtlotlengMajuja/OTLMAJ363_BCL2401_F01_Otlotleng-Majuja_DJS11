// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

export default function ShowList(shows) {
  const [sortOption, setSortOption] = useState("title_az");

  const sortShows = (shows) => {
    if (sortOption === "title_az") {
      return shows.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title_za") {
      return shows.sort((a, b) => b.title.localeCompare(a.title));
    }
    return shows;
  };

  const sortedShows = sortShows([...shows]);

  return (
    <div>
      <h2>All Shows</h2>
      <div>
        <label>Sort by: </label>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="title_az">Title A-Z</option>
          <option value="title_za">Title Z-A</option>
        </select>
      </div>
      <ul>
        {sortedShows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
}
