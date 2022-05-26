import { createSlice } from "@reduxjs/toolkit";

const availableSlice = createSlice({
  name: "available",
  initialState: {
    available: [],
  },
  reducers: {
    allAvailable: (state, action) => {
      state.available = action.payload;
    },
  },
});

export const { allAvailable } = availableSlice.actions;

export default availableSlice.reducer;
