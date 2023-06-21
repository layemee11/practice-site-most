import React from "react";

function Footer() {
  const footerStyle = {
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid #ddd",
    fontSize: "14px",
    color: "#777",
  };

  return (
    <footer style={footerStyle}>
      <p>Все права защищены &copy; 2023</p>
    </footer>
  );
}

export default Footer;
