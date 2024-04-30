import { createSlice } from "@reduxjs/toolkit";

const tvShowSlice = createSlice({
  name: "tvShow",
  initialState: {
    onTheAir: null,
    airingToday: null,
  },
  reducers: {
    addOnTheAirShows: (state, action) => {
      state.onTheAir = action.payload;
    },
    addAiringToday: (state, action) => {
      state.airingToday = action.payload;
    },
  },
});

export const { addAiringToday, addOnTheAirShows } = tvShowSlice.actions;
export default tvShowSlice.reducer;
