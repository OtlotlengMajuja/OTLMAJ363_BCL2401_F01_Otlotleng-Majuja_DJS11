import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <h1>Sound Silo</h1>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Home
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Favourites
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Search
        </NavLink>
      </nav>
    </header>
  );
}
