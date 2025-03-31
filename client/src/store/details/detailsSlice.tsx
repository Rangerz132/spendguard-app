import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityType } from "../../components/Activity/type/ActivityType";

interface DetailsState {
  data: ActivityType;
  isShowed: boolean;
}

const initialState: DetailsState = {
  data: {
    id: "",
    name: "",
    description: "",
    amount: 0,
    isExpense: true,
    category: "music",
    createdAt: "",
  },
  isShowed: false,
};

export const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {
    setDetails: (state, action: PayloadAction<ActivityType>) => {
      state.data = action.payload;
    },
    showDetails: (state) => {
      state.isShowed = true;
    },
    hideDetails: (state) => {
      state.isShowed = false;
    },
  },
});

export const { setDetails, showDetails, hideDetails } = detailsSlice.actions;

export default detailsSlice.reducer;
