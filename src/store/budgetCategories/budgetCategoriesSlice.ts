import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BudgetCategoryType } from "../../components/Budget/type/BudgetCategoryType";

const initialState: BudgetCategoryType[] = [];

export const budgetCategoriesSlice = createSlice({
  name: "budgetCategories",
  initialState,
  reducers: {
    setBudgetCategories: (
      state,
      action: PayloadAction<BudgetCategoryType[]>
    ) => {
      return action.payload;
    },
    addBudgetCategory: (state, action: PayloadAction<BudgetCategoryType>) => {
      state.push(action.payload);
    },
    deleteBudgetCategory: (state, action: PayloadAction<string>) => {
      return state.filter((activity) => activity.id !== action.payload);
    },
    updateBudgetCategory: (state, action) => {
      const index = state.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const {
  setBudgetCategories,
  addBudgetCategory,
  deleteBudgetCategory,
  updateBudgetCategory,
} = budgetCategoriesSlice.actions;

export default budgetCategoriesSlice.reducer;
