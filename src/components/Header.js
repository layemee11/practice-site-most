import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "./store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  const handleLogout = () => {
    dispatch(logout());
  };

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

  const logoutButtonStyle = {
    fontSize: "18px",
    fontWeight: "normal",
    marginLeft: "20px",
    padding: "8px 16px",
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>
        layemee
      </Link>
      <nav style={navStyle}>
        <NavLink to="/" style={homeLinkStyle} activestyle={activeLinkStyle} end>
          Home
        </NavLink>
        <NavLink to="/state" style={linkStyle} activestyle={activeLinkStyle}>
          State
        </NavLink>
        {isAuthenticated ? (
          <>
            <NavLink
              to="/posts"
              style={linkStyle}
              activestyle={activeLinkStyle}
            >
              Посты
            </NavLink>
            <NavLink to="/cart" style={linkStyle} activestyle={activeLinkStyle}>
              Корзина
            </NavLink>
            <NavLink
              to="/profile"
              style={linkStyle}
              activestyle={activeLinkStyle}
            >
              Профиль
            </NavLink>
            <button
              onClick={handleLogout}
              style={logoutButtonStyle}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#e65c00")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#FF7F50")}
            >
              Выйти
            </button>
          </>
        ) : (
          <NavLink to="/login" style={linkStyle} activestyle={activeLinkStyle}>
            Войти
          </NavLink>
        )}
      </nav>
    </header>
  );
}

export default Header;
