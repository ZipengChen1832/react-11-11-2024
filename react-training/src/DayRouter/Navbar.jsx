import React from "react";
import { Link } from "react-router-dom";



export default function Navbar({pages}) {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        {pages.map((page) => {
          const { path, name } = page;
          return (
            <li key={path} className="navbar__list-item">
              <Link to={path}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
