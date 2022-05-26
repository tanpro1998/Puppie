import { createSlice } from "@reduxjs/toolkit";

const dogSlice = createSlice({
  name: "dogs",
  initialState: {
    dogs: [],
  },
  reducers: {
    allDogs: (state, action) => {
      state.dogs = action.payload;
    },
  },
});

export const { allDogs } = dogSlice.actions;

export default dogSlice.reducer;
