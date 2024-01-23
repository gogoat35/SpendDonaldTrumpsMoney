import { createSlice, current } from "@reduxjs/toolkit";
import items from "./items.json";
export const cartBagSlice = createSlice({
  name: "bag",
  initialState: {
    total: 0,
    balance: 2600000000,
    items: items,
    cart: [],
  },
  reducers: {
    addCart: (state, action) => {
      let clone = [...state.cart];
      const checkCart = clone.find((item) => item.id === action.payload.id);
      if (checkCart) {
        let index = clone.findIndex((item) => item.id === action.payload.id);
        clone[index].amount += 1;
        state.cart = clone;
      } else {
        state.cart = [
          ...state.cart,
          {
            id: action.payload.id,
            name: action.payload.name,
            amount: 1,
            price: action.payload.price,
          },
        ];
      }
    },

    sellCard: (state, action) => {
      let clone = [...state.cart];
      let index = clone.findIndex((item) => item.id === action.payload.id);
      if (clone[index].amount <= 1) {
        clone.splice(index, 1);
        state.cart = clone;
      } else {
        clone[index].amount -= 1;
        state.cart = clone;
      }
    },
    filtered: (state, action) => {
      const clone = [...state.cart];
      let findex = clone.find((item) => item.id == action.payload.id);
      if (findex != undefined) {
        return clone[findex].amount0;
      } else {
        return 0;
      }
    },
    reduce: (state) => {
      const clone = [...state.cart];
      let sumBasket = clone.reduce((acc, items) => {
        return (
          acc +
          items.amount * clone.find((product) => product.id === items.id).price
        );
      }, 0);
      state.total = sumBasket;
    },
    increase: (state) => {
      const clone = [...state.cart];
      let increaseBasket = clone.reduce((acc, items) => {
        return (
          acc -
          items.amount * clone.find((product) => product.id === items.id).price
        );
      }, 0);
      state.total = Math.abs(increaseBasket);
    },
  },
});

export const { addCart, sellCard, reduce, increase } = cartBagSlice.actions;
export default cartBagSlice.reducer;
