import { createSlice } from "@reduxjs/toolkit";

const editSaaSSlice = createSlice({
  name: "editSaaS",
  initialState: {
    applicationToEdit: null,
  },

  reducers: {
    setApplicationToEdit: (state, action) => {
      state.applicationToEdit = action.payload;
    },
  },
});

export default editSaaSSlice;
