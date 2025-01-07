import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/todos">Incomplete Todos</Link>
        </li>
        <li>
          <Link to="/todos/completed">Completed Todos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
