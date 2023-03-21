import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuMobileSlice from "./slices/menuMobileSlice";
import modalSlice from "./slices/modalSlice";

const rootReducer = combineReducers({
  modal: modalSlice,
  menuMobile: menuMobileSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
