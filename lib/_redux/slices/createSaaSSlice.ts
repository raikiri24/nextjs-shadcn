import { createSlice } from "@reduxjs/toolkit";

const createSaaSSlice = createSlice({
  name: "createSaaS",
  initialState: {
    image: null,
  },

  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
  },
});

export default createSaaSSlice;
