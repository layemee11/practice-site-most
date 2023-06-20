import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);

      if (existingItem) {
        existingItem.count += 1; // Increment count if item already exists
      } else {
        state.push({ ...action.payload, count: 1 }); // Add item with count 1
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const existingItem = state.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.count > 1) {
          existingItem.count -= 1; // Decrement count if count > 1
        } else {
          return state.filter((item) => item.id !== itemId); // Remove item if count is 1
        }
      }
    },
    clearCart: (state) => {
      state.length = 0; // Clear the cart by setting the length to 0
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
