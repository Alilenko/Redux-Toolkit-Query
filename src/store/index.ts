import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./github/github.api";
import { githubReducer } from "./github/githubSlice";

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    github: githubReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
});
setupListeners(store.dispatch);

export type RootType = ReturnType<typeof store.getState>;
