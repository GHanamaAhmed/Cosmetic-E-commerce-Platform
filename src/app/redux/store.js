import basket from "./basketReducer";
import { configureStore } from "@reduxjs/toolkit";
import account from "./accountReducer";
export const makeStore = () => {
  return configureStore({
    reducer: {
      basket,
      account,
    },
  });
};