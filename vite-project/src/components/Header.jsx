import React from "react";
import { NavLink } from "react-router-dom";

const activeStyles = {
  fontWeight: "bold",
  textDecoration: "underline",
  color: "#161616",
};

const Header = () => {
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
      <NavLink
        to="/search"
        className={({ isActive }) => (isActive ? activeStyles : null)}
      >
        Search
      </NavLink>
    </nav>
  </header>;
};

export default Header;
