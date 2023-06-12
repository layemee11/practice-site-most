import React from "react";
import PropTypes from "prop-types";
import "./Product.css";

const Product = ({ title, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-price">{price}</p>
    </div>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

const products = [
  {
    title: "Product 1",
    price: "149 руб.",
    //image: "",
  },
  {
    title: "Product 2",
    price: "299 руб.",
    //image: "",
  },
  {
    title: "Product 3",
    price: "1990 руб.",
    //image: "",
  },
  {
    title: "Product 4",
    price: "4199 руб.",
    //image: "",
  },
  {
    title: "Product 5",
    price: "1599 руб.",
    //image: "",
  },
  {
    title: "Product 6",
    price: "1990 руб.",
    //image: "",
  },
  {
    title: "Product 7",
    price: "1999 руб.",
    //image: "",
  },
  {
    title: "Product 8",
    price: "9499 руб.",
    //image: "",
  },
  {
    title: "Product 9",
    price: "199 руб.",
    //image: "",
  },
  {
    title: "Product 10",
    price: "2199 руб.",
    //image: "",
  },
  {
    title: "Product 11",
    price: "1199 руб.",
    //image: "",
  },
  {
    title: "Product 12",
    price: "19900 руб.",
    //image: "",
  },
  {
    title: "Product 13",
    price: "19990 руб.",
    //image: "",
  },
  {
    title: "Product 14",
    price: "1949 руб.",
    //image: "",
  },
  {
    title: "Product 15",
    price: "1999 руб.",
    //image: "",
  },
  {
    title: "Product 16",
    price: "199 руб.",
    //image: "",
  },
];

const ProductList = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default ProductList;
