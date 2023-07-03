import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./components/pages/Home";
import State from "./components/pages/State";
import Header from "./components/Header";
import Footer from "./components/Footer";
import store from "./components/store/store";
import Cart from "./components/pages/Cart";
import Login from "./components/pages/Login";
import Profile from "./components/pages/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductDetails from "./components/pages/ProductDetails";
import Posts from "./components/pages/Posts";
import Users from "./components/pages/Users";
import UserDetails from "./components/pages/UserDetails";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state" element={<State />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/:userId" element={<UserDetails />} />
          </Routes>
          <Footer />
          <ToastContainer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
