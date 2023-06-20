import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productCartStyle = {
    backgroundColor: "#f2f2f2",
    width: "200px",
    margin: "10px",
    border: "2px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "relative",
  };

  const productTitleStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const productPriceStyle = {
    marginBottom: "5px",
  };

  const productImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  };

  const addToCartButtonStyle = {
    backgroundColor: "#FF7F50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Товар добавлен в корзину!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <div>
      <div style={productContainerStyle}>
        {products.map((item) => (
          <div key={item.id} style={productCartStyle}>
            <p style={productTitleStyle}>Товар: {item.title}</p>
            <p style={productPriceStyle}>Цена: {item.price}$</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
            <button
              style={addToCartButtonStyle}
              onClick={() => handleAddToCart(item)}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
