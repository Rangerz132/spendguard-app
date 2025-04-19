import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./details/detailsSlice";
import statusSlice from "./status/statusSlice";
import activitiesSlice from "./activities/activitiesSlice";

export const store = configureStore({
  reducer: {
    details: detailsSlice,
    status: statusSlice,
    activities: activitiesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
