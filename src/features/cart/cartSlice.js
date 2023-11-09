import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// import cartItems from '../../cartItems'
const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}
const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk("cart/getCartItem", async () => {
  try {
    const resp = await axios.get(url);
    // console.log(resp.data);
    return resp.data;
  } catch (error) {
    return error;
  }
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeCart: (state, { payload: id }, action) => {
      console.log(id);
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
    },
    increaseCart: (state, { payload: id }) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === id;
      });
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload: id }) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === id;
      });
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, { payload }) => {
      state.isLoadng = false;
      state.cartItems = payload;
    },
    [getCartItems.rejected]: (state) => {},
  },
});

export const {clearCart, removeCart, increaseCart, decrease, calculateTotals} = cartSlice.actions
export default cartSlice.reducer