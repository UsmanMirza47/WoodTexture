import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/Cart/CartSlice";
import wishReducer from "../features/WishList/WishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer,
  },
});
