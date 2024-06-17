import React from "react";

export default function Showlist({ shows }) {
  () => (
    <div>
      <h2>All Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.title}</li>
        ))}
      </ul>
    </div>
  );
}
