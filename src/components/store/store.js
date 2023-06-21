import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import cartReducer from "./cartSlice";
import productDetailsReducer from "./productDetailsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    productDetails: productDetailsReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
