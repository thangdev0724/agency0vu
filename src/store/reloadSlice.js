import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const reloadSlice = createSlice({
  name: "LoadingData",
  initialState,
  reducers: {
    reload: (state) => {
      state.isLoading = !state.isLoading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { reload } = reloadSlice.actions;

export default reloadSlice.reducer;
