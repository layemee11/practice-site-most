import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../store/productDetailsSlice";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "20px",
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    padding: "20px",
    border: "1px solid #e0e0e0",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#333",
  },
  description: {
    fontSize: "18px",
    marginBottom: "20px",
    color: "#666",
    textAlign: "center",
  },
  price: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  label: {
    fontWeight: "bold",
    marginRight: "4px",
    color: "#666",
  },
  imagesContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "20px",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "50%",
    height: "50%",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};

function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);

  useEffect(() => {
    dispatch(fetchProductDetails(productId));
  }, [dispatch, productId]);

  if (productDetails.loading) {
    return <p>Loading...</p>;
  }

  if (productDetails.error) {
    return <p>Error: {productDetails.error}</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        background: "linear-gradient(90deg, #bf7a38, #ffffff, #bf7a38)",
      }}
    >
      <div style={styles.container}>
        <img
          src={productDetails.thumbnail}
          alt="Thumbnail"
          style={styles.thumbnail}
        />
        <h2 style={styles.title}>{productDetails.title}</h2>
        <p style={styles.description}>{productDetails.description}</p>
        <p style={styles.price}>Price: {productDetails.price}$</p>
        <p>
          <span style={styles.label}>Discount:</span>{" "}
          {productDetails.discountPercentage}%
        </p>
        <p>
          <span style={styles.label}>Rating:</span> {productDetails.rating}
        </p>
        <p>
          <span style={styles.label}>Stock:</span> {productDetails.stock}
        </p>
        <p>
          <span style={styles.label}>Brand:</span> {productDetails.brand}
        </p>
        <p>
          <span style={styles.label}>Category:</span> {productDetails.category}
        </p>
        <div style={styles.imagesContainer}>
          {productDetails.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={styles.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
