import React from "react";

function Footer() {
  const footerStyle = {
    fontStyle: "sans-sefif",
    backgroundColor: "white",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <p>Все права защищены &copy; 2023</p>
    </footer>
  );
}

export default Footer;
