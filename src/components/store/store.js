import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import cartReducer from "./cartSlice";
import productDetailsReducer from "./productDetailsSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
