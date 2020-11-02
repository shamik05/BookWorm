/* eslint-disable no-alert */
import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import Search from "./pages/Search";
import Nav from "./components/Navbar";
import Saved from "./pages/Saved";
import Jumbotron from "./components/Jumbotron";

const socket = io();

function App() {
  useEffect(() => {
    socket.on("saved", (data) => {
      alert(`${data} has been saved!`);
    });
  });

  return (
    <BrowserRouter>
      <Nav />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
      </Jumbotron>

      <Switch>
        <Route exact path={["/", "/search"]}>
          <Search />
        </Route>
        <Route exact path="/saved">
          <Saved />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
