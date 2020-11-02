import React from "react";

// Header component with links going to homepage and saved pages
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books
      </a>
      <a className="navbar-brand" href="/search">
        <small>Search</small>
      </a>
      <a className="navbar-brand" href="/saved">
        <small>Saved</small>
      </a>
    </nav>
  );
}

// Export component
export default Nav;
