import React from "react";
import { Link, NavLink } from "react-router-dom";
import imageUrl from "/src/assets/images/avatar-icon.png";

export default function Header() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  function fakeLogOut() {
    localStorage.removeItem("loggedin");
  }

  return (
    <header>
      <Link className="site-logo" to="/">
        Sound Silo
      </Link>
      <nav>
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
        <Link to="login" className="login-link">
          <img src={imageUrl} className="login-icon" />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}
