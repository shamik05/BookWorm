/* eslint-disable no-alert */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import io from "socket.io-client";
import Search from "./pages/Search";
import Nav from "./components/Navbar";
import Saved from "./pages/Saved";
import Jumbotron from "./components/Jumbotron";
import Alert from "./components/Alert";

const socket = io();

function App() {
  // Track any alerts emitted by socketio
  const [alert, setAlert] = useState();

  // Handle an emitted message called saved and emit book details
  useEffect(() => {
    socket.on("saved", (data) => {
      setAlert(data);
    });
  });

  // Set alert to null to dismount the component on click
  function closeAlert() {
    setAlert(null);
  }

  return (
    <BrowserRouter>
      {/* Nav and Jumbotron are always visible */}
      <Nav />
      <Jumbotron>
        <h1>(React) Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
      </Jumbotron>
      {/* Display alerts if there is an alert state */}
      {alert ? (<Alert alert={alert} buttonClick={closeAlert} />) : null}
      {/* Setting up routing with two pages Saved and Search */}
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
