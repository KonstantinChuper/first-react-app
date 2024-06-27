import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Main page
          </NavLink>
        </li>
        <li>
          <NavLink to="/articles" className={({ isActive }) => (isActive ? "active-link" : "")}>
            Articles
          </NavLink>
        </li>
      </nav>
    </header>
  );
}
