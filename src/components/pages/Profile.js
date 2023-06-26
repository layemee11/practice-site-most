import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.auth.user);

  const profileContainerStyle = {
    fontFamily: "Helvetica, Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
    background: "linear-gradient(90deg, #bf7a38, #ffffff, #bf7a38)",
  };

  const contentContainerStyle = {
    maxWidth: "600px",
    width: "100%",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
    textTransform: "uppercase",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginRight: "10px",
    color: "#666",
  };

  const avatarStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "20px",
  };

  const usernameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#333",
  };

  const decorationStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #bf7a38, #ffffff, #bf7a38)",
    opacity: 0.1,
    zIndex: -1,
  };

  return (
    <div style={profileContainerStyle}>
      <div style={contentContainerStyle}>
        <div style={decorationStyle}></div>
        <h1 style={headingStyle}>
          Профиль пользователя {user && user.username}
        </h1>
        {user ? (
          <>
            <img src={user.image} alt="Аватар" style={avatarStyle} />
            <h2 style={usernameStyle}>
              {user.firstName} {user.lastName}
            </h2>
            <p>
              <span style={labelStyle}>Пол:</span>
              {user.gender}
            </p>
            <p>
              <span style={labelStyle}>Email:</span>
              {user.email}
            </p>
            <p>
              <span style={labelStyle}>ID пользователя:</span>
              {user.id}
            </p>
            {/* <p>
              <span style={labelStyle}>Token:</span>
              {user.token}
            </p> */}
          </>
        ) : (
          <p>Пользователь не найден.</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
