import { configureStore } from "@reduxjs/toolkit";
import basket from "./basketReducer";
export const createStore = (preloadedState) => {
  return configureStore({
    reducer: {
      basket
    },
    preloadedState,
  });
};

let store;
export const initialiseStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState);
  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;
  return _store;
};

