import React from "react";
import { Link } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";

const Showlist = ({ shows }) => {
  <div>
    <h2>All Shows</h2>
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <Link to={`/show/${show.id}`}>
            <img src={show.image} alt={`${show.title} poster`} width="100" />
            <div>{show.title}</div>
            <div>Seasons: {show.seasons.length}</div>
            <div>
              Last Updated: {formatDistanceToNow(new Date(show.lastUpdated))}{" "}
              ago
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </div>;
};

export default Showlist;
