import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../store/postsSlice";
import { Navigate } from "react-router-dom";

// import { clearPosts } from "../store/postsSlice";

function Posts() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const username = useSelector((state) => state.auth.user?.username);
  const posts = useSelector((state) => state.posts);

  const handleAddPost = () => {
    const post = {
      title,
      content,
      username,
    };
    dispatch(addPost(post));
    setTitle("");
    setContent("");
  };
  //   const handleClearPosts = () => {
  //     dispatch(clearPosts());
  //   };
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  const style = {
    postsContainer: {
      fontFamily: "Helvetica, Arial, sans-serif",
      padding: "20px",
      textAlign: "center",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      background: "linear-gradient(90deg, #bf7a38, #ffffff, #bf7a38)",
    },
    sectionTitle: {
      fontSize: "24px",
      marginBottom: "20px",
      color: "#333",
      textTransform: "uppercase",
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "20px",
      width: "550px",
      margin: "0 auto",
    },
    postInput: {
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "16px",
    },
    addButton: {
      padding: "10px 20px",
      backgroundColor: "#ff4081",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
      fontSize: "18px",
      fontWeight: "bold",
      textTransform: "uppercase",
    },
    addButtonHover: {
      backgroundColor: "#d81b60",
    },
    postList: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    postItem: {
      marginBottom: "20px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      background: "linear-gradient(to bottom, #ffffff, #f2f2f2)",
      boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)",
      width: "500px",
      margin: "0 auto",
    },
    postTitle: {
      fontSize: "20px",
      marginBottom: "10px",
      color: "#333",
      fontWeight: "bold",
      width: "300px",
      margin: "0 auto",
      overflowWrap: "break-word",
    },
    postContent: {
      fontSize: "16px",
      marginBottom: "10px",
      color: "#666",
      width: "300px",
      margin: "0 auto",
      overflowWrap: "break-word",
    },
    postAuthor: {
      fontSize: "14px",
      color: "#888",
    },
  };

  return (
    <div style={style.postsContainer}>
      <h2 style={style.sectionTitle}>Добавить пост</h2>
      <div style={style.inputContainer}>
        <input
          type="text"
          style={style.postInput}
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          style={style.postInput}
          placeholder="Содержание"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          style={style.addButton}
          onClick={handleAddPost}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor =
              style.addButtonHover.backgroundColor)
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = style.addButton.backgroundColor)
          }
        >
          Добавить
        </button>
      </div>

      <h2 style={style.sectionTitle}>Список постов</h2>
      {posts.length > 0 ? (
        <ul style={style.postList}>
          {posts.map((post) => (
            <li key={post.id} style={style.postItem}>
              <h3 style={style.postTitle}>{post.title}</h3>
              <p style={style.postContent}>{post.content}</p>
              <p style={style.postAuthor}>Автор: {post.username}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Посты отсутствуют.</p>
      )}
      {/* <button onClick={handleClearPosts}>Очистить посты</button> */}
    </div>
  );
}

export default Posts;
