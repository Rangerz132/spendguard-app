import { configureStore } from "@reduxjs/toolkit";
import detailsSlice from "./details/detailsSlice";
import statusSlice from "./status/statusSlice";
import activitiesSlice from "./activities/activitiesSlice";
import budgetsSlice from "./budgets/budgetsSlice";
import budgetCategoriesSlice from "./budgetCategories/budgetCategoriesSlice";

export const store = configureStore({
  reducer: {
    details: detailsSlice,
    status: statusSlice,
    activities: activitiesSlice,
    budgets: budgetsSlice,
    budgetCategories: budgetCategoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
