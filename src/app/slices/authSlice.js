import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: true,
  role: "",
  username: "Admin",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      console.log("login action ran");
    },
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
