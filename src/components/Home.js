import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Product from "./Product";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Добро пожаловать на главную страницу!</h1>
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
