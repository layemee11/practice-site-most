import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const cartTitleStyle = {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#333",
  };

  const emptyCartStyle = {
    fontSize: "20px",
    marginBottom: "20px",
    color: "#666",
  };

  const cartItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  };

  const itemImageStyle = {
    width: "25%",
    height: "25%",
    marginRight: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const itemTitleStyle = {
    marginRight: "10px",
    fontWeight: "bold",
    color: "#333",
  };

  const removeButtonStyle = {
    marginLeft: "10px",
    padding: "5px 10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "white",
    cursor: "pointer",
    fontSize: "14px",
  };

  const clearButtonStyle = {
    marginTop: "20px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#ff4d4d",
    color: "white",
    cursor: "pointer",
    fontSize: "16px",
  };

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.count;
    });
    return total;
  };

  return (
    <div style={cartContainerStyle}>
      <h2 style={cartTitleStyle}>Корзина</h2>
      {cartItems.length === 0 ? (
        <p style={emptyCartStyle}>Ваша корзина пуста.</p>
      ) : (
        <div>
          <button onClick={handleClearCart} style={clearButtonStyle}>
            Очистить корзину
          </button>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} style={cartItemStyle}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  style={itemImageStyle}
                />
                <span style={itemTitleStyle}>{item.title}</span> - {item.price}$
                ({item.count})
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  style={removeButtonStyle}
                >
                  Удалить
                </button>
              </li>
            ))}
          </ul>
          <p>Общая сумма: {calculateTotal()}$</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
