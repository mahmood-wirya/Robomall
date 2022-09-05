import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  role: "",
  username: "",
  userId: 3,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.username = action.payload;
      state.role = "admin";
      
      localStorage.setItem("username", action.payload);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.role = "";
      state.username = "";
      
      localStorage.removeItem("username");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
