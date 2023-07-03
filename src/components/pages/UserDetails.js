import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, fetchUserPosts } from "../store/usersSlice";

function UserDetails() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const posts = useSelector((state) => state.users.posts);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);
  const user = users.find((user) => user.id === +userId);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchUserPosts(userId));
  }, [dispatch, userId]);

  if (loading) {
    return <p>Loading user details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

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

  const postContainerStyle = {
    marginBottom: "20px",
    padding: "10px",
    background: "#f5f5f5",
    borderRadius: "5px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const postTitleStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  };

  const postBodyStyle = {
    fontSize: "14px",
    color: "#666",
  };

  return (
    <div style={profileContainerStyle}>
      <div style={contentContainerStyle}>
        <div style={decorationStyle}></div>
        <h2 style={headingStyle}>Пользователь</h2>
        {user ? (
          <div>
            <img src={user.image} alt="User" style={avatarStyle} />
            <h3 style={usernameStyle}>{user.username}</h3>
            <p>
              <span style={labelStyle}>Имя:</span>
              {user.firstName} {user.lastName}
            </p>
            <p>
              <span style={labelStyle}>Email:</span>
              {user.email}
            </p>
            <p>
              <span style={labelStyle}>Возраст:</span>
              {user.age}
            </p>
            <p>
              <span style={labelStyle}>Пол:</span>
              {user.gender}
            </p>
            <p>
              <span style={labelStyle}>Город:</span>
              {user.address.city}
            </p>
            <h4 style={headingStyle}>Посты пользователя</h4>
            {posts.map((post) => (
              <div key={post.id} style={postContainerStyle}>
                <h5 style={postTitleStyle}>{post.title}</h5>
                <p style={postBodyStyle}>{post.body}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>User not found.</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
