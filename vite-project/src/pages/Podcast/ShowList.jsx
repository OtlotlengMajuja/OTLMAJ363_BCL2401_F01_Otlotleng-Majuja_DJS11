import React from "react";
import { Link } from "react-router-dom";

const Showlist = ({ shows }) => {
  <div>
    <h2>All Shows</h2>
    <ul>
      {shows.map((show) => (
        <li key={show.id}>
          <Link to={`/show/${show.id}`}>{show.title}</Link>
        </li>
      ))}
    </ul>
  </div>;
};

export default Showlist;
