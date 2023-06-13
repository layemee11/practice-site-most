import React, { useEffect, useState } from "react";

function Header() {
  const headerStyle = {
    backgroundColor: "#808080",
    padding: "20px",
    textAlign: "left",
  };

  return (
    <header style={headerStyle}>
      <h1>layemee</h1>
    </header>
  );
}

function Footer() {
  const footerStyle = {
    backgroundColor: "#808080",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <footer style={footerStyle}>
      <p>Все права защищены &copy; 2023</p>
    </footer>
  );
}

function Home() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await fetch("https://dummyjson.com/products")
      .then((resp) => resp.json())
      .then((resp) => {
        console.log(resp);
        setProducts(resp.products);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productStyle = {
    backgroundColor: "#808080",
    width: "200px",
    margin: "10px",
    border: "6px solid black",
  };

  const productTitleStyle = {
    fontWeight: "bold",
  };

  const productImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div>
      <Header />
      <div style={productContainerStyle}>
        {products.map((item) => (
          <div key={item.id} style={productStyle}>
            <p style={productTitleStyle}>Товар: {item.title}</p>
            <p>Цена: {item.price}$</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
