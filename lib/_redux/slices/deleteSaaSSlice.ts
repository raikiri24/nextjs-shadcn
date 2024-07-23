import { createSlice } from "@reduxjs/toolkit";

const deleteSaaSSlice = createSlice({
  name: "deleteSaaS",
  initialState: {
    applicationToDelete: null,
  },

  reducers: {
    setApplicationToDelete: (state, action) => {
      state.applicationToDelete = action.payload;
    },
  },
});

export default deleteSaaSSlice;
