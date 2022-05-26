import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dogReducer from "./slice/dogSlice";
import availableReducer from "./slice/availableSlice";

const rootReducer = combineReducers({
  dogs: dogReducer,
  available: availableReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});
