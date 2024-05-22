import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import tvShowReducer from "./tvShowSlice";
import gptReducer from "./gptSlice";
import configRefucer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    tvShows: tvShowReducer,
    gpt: gptReducer,
    config: configRefucer,
  },
});

export default appStore;
