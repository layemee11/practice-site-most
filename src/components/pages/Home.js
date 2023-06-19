import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
