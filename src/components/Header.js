import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    fontStyle: "sans-sefif",
    backgroundColor: "white",
    padding: "20px",
    textAlign: "left",
  };

  const linkStyle = {
    fontStyle: "sans-sefif",
    marginRight: "20px",
    color: "black",
    textDecoration: "none",
  };
  const homeButtonStyle = {
    fontStyle: "sans-sefif",
    color: "black",
    fontWeight: "bold",
    border: "none",
    marginRight: "10px",
  };
  const pagesStyle = {
    color: "black",
    fontStyle: "sans-sefif",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
  };
  return (
    <header style={headerStyle}>
      <h1>layemee</h1>
      <nav style={pagesStyle}>
        <Link to="/" style={homeButtonStyle}>
          Home
        </Link>
        <Link to="/state" style={linkStyle}>
          State
        </Link>
        <Link to="/cart" style={linkStyle}>
          Корзина
        </Link>
      </nav>
    </header>
  );
}

export default Header;
