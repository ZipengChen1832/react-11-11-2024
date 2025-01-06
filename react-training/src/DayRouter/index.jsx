import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Topics from "./Topics";
import Navbar from "./Navbar";
import "./index.css";
import Users from "./Users/Users";
import User from "./Users/User";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Users", path: "/users" },
  { name: "Topics", path: "/topics" },
];

export default function DayRouter() {
  return (
    <div>
      <h1>Day Router</h1>

      <Router>
        <div>
          <Navbar pages={pages} />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users" exact>
              <Users />
            </Route>
            <Route path="/users/:id">
              <User />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Home() {
  useEffect(() => {
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, []);

  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
