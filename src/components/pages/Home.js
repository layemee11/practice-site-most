import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { addToCart } from "../store/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productCartStyle = {
    backgroundColor: "#fff",
    width: "300px",
    margin: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    position: "relative",
    overflow: "hidden",
  };

  const productTitleStyle = {
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "10px",
    color: "#333",
    textDecoration: "none",
  };

  const productPriceStyle = {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#666",
  };

  const productImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease-in-out",
  };

  const addToCartButtonStyle = {
    backgroundColor: "#FF7F50",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 20px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
    outline: "none",
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "16px",
  };

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      toast.error(
        "Вы должны быть авторизованы для добавления товара в корзину",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
      return;
    }

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
            <Link to={`/products/${item.id}`} style={productTitleStyle}>
              {item.title}
            </Link>
            <p style={productPriceStyle}>Цена: {item.price}$</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
            <button
              style={addToCartButtonStyle}
              onClick={() => handleAddToCart(item)}
              //disabled={!isLoggedIn}
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
