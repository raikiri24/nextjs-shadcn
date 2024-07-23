import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    user: {},
    isOpenOtp: false,
    isLoggingIn: false,
    isLoggingOut: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = { ...action.payload };
    },
    openOTPModal: (state, action) => {
      state.isOpenOtp = action.payload;
    },
    setLoggingIn: (state, action) => {
      state.isLoggingIn = action.payload;
    },
    setLoggingOut: (state, action) => {
      state.isLoggingOut = action.payload;
    },
  },
});

export default loginSlice;
