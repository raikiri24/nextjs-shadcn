import { createSlice } from "@reduxjs/toolkit";

const nextWeekActivitySlice = createSlice({
  name: "nextWeekActivity",
  initialState: {
    activities: [] as any,
  },
  reducers: {
    setActivity: (state: any, action: any) => {
      state.activities = [...state.activities, action.payload];
    },
  },
});

export default nextWeekActivitySlice;
