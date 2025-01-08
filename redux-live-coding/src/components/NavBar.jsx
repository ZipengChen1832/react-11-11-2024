import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/todos">Incomplete Todos</Link>
          <Link to="/todos/completed">Completed Todos</Link>
    </nav>
  );
};

export default NavBar;
