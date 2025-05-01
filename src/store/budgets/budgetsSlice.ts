import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BudgetType } from "../../components/Budget/type/BudgetType";

const initialState: BudgetType[] = [];

export const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    setBudgets: (_state, action: PayloadAction<BudgetType[]>) => {
      return action.payload;
    },
    addBudget: (state, action: PayloadAction<BudgetType>) => {
      state.push(action.payload);
    },
    deleteBudget: (state, action: PayloadAction<string>) => {
      return state.filter((activity) => activity.id !== action.payload);
    },
    updateBudget: (state, action) => {
      const index = state.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setBudgets, addBudget, deleteBudget, updateBudget } =
  budgetsSlice.actions;

export default budgetsSlice.reducer;
