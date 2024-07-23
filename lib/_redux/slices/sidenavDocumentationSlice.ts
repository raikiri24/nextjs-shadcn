import { createSlice } from "@reduxjs/toolkit";

const sideNavDocumentationSlice = createSlice({
  name: "sidenav",
  initialState: {
    activeKey: "inbound",
  },

  reducers: {
    setActiveKey: (state, action) => {
      state.activeKey = action.payload;
    },
  },
});

export default sideNavDocumentationSlice;
