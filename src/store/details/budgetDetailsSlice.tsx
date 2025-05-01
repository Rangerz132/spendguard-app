import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BudgetType } from "../../components/Budget/type/BudgetType";

interface BudgetDetailsState {
  data: BudgetType;
  isShowed: boolean;
}

const initialState: BudgetDetailsState = {
  data: {
    id: "",
    name: "",
    description: "",
    created_at: null,
    user_id: null,
    from: null,
    to: null,
  },
  isShowed: false,
};

export const budgetDetailsSlice = createSlice({
  name: "budgetDetails",
  initialState,
  reducers: {
    setBudgetDetails: (state, action: PayloadAction<BudgetType>) => {
      state.data = action.payload;
    },
    showBudgetDetails: (state) => {
      state.isShowed = true;
    },
    hideBudgetDetails: (state) => {
      state.isShowed = false;
    },
  },
});

export const { setBudgetDetails, showBudgetDetails, hideBudgetDetails } =
  budgetDetailsSlice.actions;

export default budgetDetailsSlice.reducer;
