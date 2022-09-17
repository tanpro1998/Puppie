import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dogReducer from "./slice/dogSlice";
import availableReducer from "./slice/availableSlice";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  dogs: dogReducer,
  available: availableReducer,
  auth: authReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
