import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishItems: [],
};

export const wishListSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const value = action.payload;

      const newItems = {
        id: value.id,
        name: value.name,
        quantity: value.count,
        price: value.price,
        totalPrice: value.price * value.count,
        images: value.images,
      };

      state.wishItems.push(newItems);
    },
    removeFromWish: (state, action) => {
      const id = action.payload;
      state.wishItems = state.wishItems.filter((item) => {
        return item.id !== id;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToWishList, removeFromWish } = wishListSlice.actions;

export default wishListSlice.reducer;
