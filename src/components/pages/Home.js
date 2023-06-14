import React, { useEffect, useState } from "react";

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
    fontStyle: "sans-sefif",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productStyle = {
    fontStyle: "sans-sefif",
    backgroundColor: "#808080",
    width: "200px",
    margin: "10px",
    border: "6px solid black",
  };

  const productTitleStyle = {
    fontStyle: "sans-sefif",
    fontWeight: "bold",
  };

  const productImageStyle = {
    fontStyle: "sans-sefif",
    width: "100%",
    height: "auto",
  };

  return (
    <div>
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
    </div>
  );
}

export default Home;
