import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "./store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const headerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const logoStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    textDecoration: "none",
  };

  const navStyle = {
    flexBasis: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "10px",
  };

  const linkStyle = {
    fontFamily: "Georgia, Times New Roman, serif",
    fontSize: "18px",
    fontWeight: "normal",
    color: "#666",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
    marginLeft: "20px",
  };

  const activeLinkStyle = {
    color: "#FF7F50",
    fontWeight: "bold",
  };

  const menuButtonStyle = {
    fontSize: "20px",
    color: "#333",
    textDecoration: "none",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "color 0.3s ease-in-out",
    marginLeft: "10px",
    display: "flex",
    alignItems: "center",
  };

  const menuStyle = {
    display: isMenuOpen ? "block" : "none",
    top: "5%",
    right: "0",
    position: "absolute",
    backgroundColor: "#fff",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: "1",
  };

  const menuLinkStyle = {
    display: "block",
    fontFamily: "Georgia, Times New Roman, serif",
    fontSize: "16px",
    fontWeight: "normal",
    color: "#666",
    textDecoration: "none",
    transition: "color 0.3s ease-in-out",
    marginBottom: "10px",
  };

  const logoutButtonStyle = {
    fontSize: "18px",
    fontWeight: "normal",
    padding: "8px 16px",
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={headerStyle}>
      <div className="container">
        <nav style={navStyle}>
          <Link to="/" style={logoStyle}>
            layemee
          </Link>
          <button
            style={menuButtonStyle}
            onClick={handleMenuButtonClick}
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            &#9776;
          </button>
          <div style={menuStyle}>
            <NavLink
              to="/"
              style={menuLinkStyle}
              activestyle={activeLinkStyle}
              end
            >
              Главная
            </NavLink>
            <NavLink
              to="/state"
              style={menuLinkStyle}
              activestyle={activeLinkStyle}
            >
              State
            </NavLink>
            <NavLink
              to="/users"
              style={menuLinkStyle}
              activestyle={activeLinkStyle}
            >
              Пользователи
            </NavLink>
            <NavLink
              to="/posts"
              style={menuLinkStyle}
              activestyle={activeLinkStyle}
            >
              Посты
            </NavLink>
            <NavLink
              to="/cart"
              style={menuLinkStyle}
              activestyle={activeLinkStyle}
            >
              Корзина
            </NavLink>
            <NavLink
              to="/profile"
              style={menuLinkStyle}
              activestyle={activeLinkStyle}
            >
              Профиль
            </NavLink>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                style={logoutButtonStyle}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#e65c00")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#FF7F50")}
              >
                Выйти
              </button>
            ) : (
              <NavLink
                to="/login"
                style={linkStyle}
                activestyle={activeLinkStyle}
              >
                Войти
              </NavLink>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
