import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./details/detailsSlice";
import statusSlice from "./status/statusSlice";

export const store = configureStore({
  reducer: {
    details: detailsSlice,
    status: statusSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
