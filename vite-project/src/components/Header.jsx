// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import { useFavorites } from "../context/FavesContext";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  const { clearFavorites } = useFavorites();

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset all your progress?")) {
      localStorage.removeItem("completedEpisodes");
      clearFavorites();
    }
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
          to="/favorites"
          className={({ isActive }) => (isActive ? activeStyles : null)}
        >
          Favorites
        </NavLink>
        <button onClick={handleReset}>Reset Progress</button>
      </nav>
    </header>
  );
}
