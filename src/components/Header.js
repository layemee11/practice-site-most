import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const headerStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    backgroundColor: "#fff",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid #ddd",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  };

  const navStyle = {
    display: "flex",
    alignItems: "center",
  };

  const linkStyle = {
    fontFamily: "Georgia, Times New Roman, serif",
    fontSize: "18px",
    fontWeight: "normal",
    marginRight: "20px",
    color: "#666",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
  };

  const activeLinkStyle = {
    color: "#FF7F50",
    fontWeight: "bold",
  };

  const homeLinkStyle = {
    ...linkStyle,
    fontSize: "20px",
    color: "#FF7F50",
    textTransform: "uppercase",
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>
        layemee
      </Link>
      <nav style={navStyle}>
        <Link to="/" style={homeLinkStyle} activeStyle={activeLinkStyle}>
          Home
        </Link>
        <Link to="/state" style={linkStyle} activeStyle={activeLinkStyle}>
          State
        </Link>
        <Link to="/cart" style={linkStyle} activeStyle={activeLinkStyle}>
          Корзина
        </Link>
      </nav>
    </header>
  );
}

export default Header;
