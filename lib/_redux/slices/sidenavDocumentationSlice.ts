import { createSlice } from "@reduxjs/toolkit";

const sideNavDocumentationSlice = createSlice({
  name: "sidenav",
  initialState: {
    activeKey: "goods-services",
  },

  reducers: {
    setActiveKey: (state, action) => {
      state.activeKey = action.payload;
    },
  },
});

export default sideNavDocumentationSlice;
