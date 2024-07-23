import { createSlice } from "@reduxjs/toolkit";

const sideNavSlice = createSlice({
  name: "sidenav",
  initialState: {
    activeKey: "1",
  },

  reducers: {
    setActiveKey: (state, action) => {
      state.activeKey = action.payload;
    },
  },
});

export default sideNavSlice;
