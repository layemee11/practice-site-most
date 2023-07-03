import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../store/usersSlice";

function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const loading = useSelector((state) => state.users.loading);
  const error = useSelector((state) => state.users.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
    background: "linear-gradient(90deg, #bf7a38, #ffffff, #bf7a38)",
  };

  const thStyle = {
    padding: "12px 16px",
    borderBottom: "2px solid #f2f2f2",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
    backgroundColor: "#FFA900",
    color: "#ffffff",
    position: "sticky",
    top: 0,
    zIndex: 1,
  };

  const tdStyle = {
    padding: "12px 16px",
    borderBottom: "1px solid #ddd",
    color: "#333",
    textAlign: "left",
    backgroundColor: "#f2f2f2",
  };

  const loadingStyle = {
    fontStyle: "italic",
    color: "#777",
    marginTop: "20px",
  };

  const errorStyle = {
    color: "red",
    fontWeight: "bold",
    marginTop: "20px",
  };

  return (
    <div>
      <h2>Пользователи</h2>
      {loading ? (
        <p style={loadingStyle}>Загрузка...</p>
      ) : error ? (
        <p style={errorStyle}>Ошибка: {error}</p>
      ) : (
        <div style={{ overflowX: "auto" }}>
          <table style={tableStyle} className="user-table">
            <thead>
              <tr>
                <th style={thStyle}></th>
                <th style={thStyle}>ИМЯ</th>
                <th style={thStyle}>EMAIL</th>
                <th style={thStyle}>ИМЯ ПОЛЬЗОВАТЕЛЯ</th>
                <th style={thStyle}>ВОЗРАСТ</th>
                <th style={thStyle}>ПОЛ</th>
                <th style={thStyle}>ГОРОД</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <img
                        src={user.image}
                        alt="Пользователь"
                        className="user-photo"
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          display: "block",
                          margin: "0 auto",
                        }}
                      />
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <span style={{ fontWeight: "bold" }}>
                        {user.firstName}
                      </span>{" "}
                      {user.lastName}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.email}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.username}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.age}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.gender}
                    </Link>
                  </td>
                  <td style={tdStyle}>
                    <Link
                      to={`/users/${user.id}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {user.address.city}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Users;
