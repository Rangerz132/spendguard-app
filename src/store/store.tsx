import { configureStore } from "@reduxjs/toolkit";
import statusSlice from "./status/statusSlice";
import activitiesSlice from "./activities/activitiesSlice";
import budgetsSlice from "./budgets/budgetsSlice";
import budgetCategoriesSlice from "./budgetCategories/budgetCategoriesSlice";
import activityDetailsSlice from "./details/activityDetailsSlice";
import budgetDetailsSlice from "./details/budgetDetailsSlice";

export const store = configureStore({
  reducer: {
    activityDetails: activityDetailsSlice,
    budgetDetails: budgetDetailsSlice,
    status: statusSlice,
    activities: activitiesSlice,
    budgets: budgetsSlice,
    budgetCategories: budgetCategoriesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
