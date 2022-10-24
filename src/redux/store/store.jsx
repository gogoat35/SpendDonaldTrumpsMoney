import { configureStore } from "@reduxjs/toolkit";
import cartBagReducer from "../slice/cartBagSlice";
export const store = configureStore({
  reducer: cartBagReducer,
});
