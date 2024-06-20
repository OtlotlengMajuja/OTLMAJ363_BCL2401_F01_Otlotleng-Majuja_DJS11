// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export default function ShowList({ shows }) {
  const [sortOption, setSortOption] = useState("title_az");
  const [filterGenre, setFilterGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const sortShows = (shows) => {
    if (sortOption === "title_az") {
      return shows.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOption === "title_za") {
      return shows.sort((a, b) => b.title.localeCompare(a.title));
    } else if (sortOption === "most_recent") {
      return shows.sort(
        (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
      );
    } else if (sortOption === "least_recent") {
      return shows.sort(
        (a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)
      );
    }

    return shows;
  };

  const filterShows = (shows) => {
    return shows.filter(
      (show) =>
        show.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!filterGenre || show.genres.includes(filterGenre))
    );
  };

  const sortedAndFilteredShows = sortShows(filterShows([...shows]));

  const genres = [...new Set(shows.flatMap((show) => show.genres))];

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
          <option value="most_recent">Most Recently Updated</option>
          <option value="least_recent">Least Recently Updated</option>
        </select>
      </div>
      <div>
        <label>Filter by genre: </label>
        <select
          value={filterGenre}
          onChange={(e) => setFilterGenre(e.target.value)}
        >
          <option value="">All</option>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Search by title: </label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search shows"
        />
      </div>
      <ul>
        {sortedAndFilteredShows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
}

ShowList.propTypes = {
  shows: PropTypes.node.isRequired,
};
