import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/">
        <small>Search</small>
      </a>
      <a className="navbar-brand" href="/">
        <small>Saved</small>
      </a>
    </nav>
  );
}

export default Nav;
