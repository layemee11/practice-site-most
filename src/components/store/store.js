import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import cartReducer from "./cartSlice";
import productDetailsReducer from "./productDetailsSlice";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    posts: postsReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
