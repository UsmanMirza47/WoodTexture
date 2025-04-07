import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const value = action.payload;

      const newItems = {
        id: value.id,
        name: value.name,
        quantity: value.count,
        price: value.price,
        totalPrice: value.price * value.count,
        images: value.images,
      };

      state.cartItems.push(newItems);
      state.totalPrice = state.cartItems.reduce((acc, num) => {
        return acc + num.totalPrice;
      }, 0);
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== id;
      });
      state.totalPrice = state.cartItems.reduce((acc, num) => {
        return acc + num.totalPrice;
      }, 0);
    },
    updateCart: (state, action) => {
      const { value, id } = action.payload;
      const existingIndex = state.cartItems.findIndex((item) => {
        return item.id === id;
      });

      if (value >= 1) {
        state.cartItems[existingIndex].quantity = value;
        state.cartItems[existingIndex].totalPrice =
          value * state.cartItems[existingIndex].price;
        state.totalPrice = state.cartItems.reduce((acc, num) => {
          return acc + num.totalPrice;
        }, 0);
      }
    },
    clearCart: (state, action) => {
      state.cartItems = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, updateCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
