import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Search from "./pages/Search";
import Nav from "./components/Navbar";
import Saved from "./pages/Saved";
import Jumbotron from "./components/Jumbotron";

function App() {
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
