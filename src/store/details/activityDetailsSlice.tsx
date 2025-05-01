import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityType } from "../../components/Activity/type/ActivityType";

interface ActivityDetailsState {
  data: ActivityType;
  isShowed: boolean;
}

const initialState: ActivityDetailsState = {
  data: {
    id: "",
    name: "",
    description: "",
    amount: 0,
    is_expense: true,
    category: "music",
    created_at: null,
    user_id: null,
    date: null,
  },
  isShowed: false,
};

export const activityDetailsSlice = createSlice({
  name: "activityDetails",
  initialState,
  reducers: {
    setActivityDetails: (state, action: PayloadAction<ActivityType>) => {
      state.data = action.payload;
    },
    showActivityDetails: (state) => {
      state.isShowed = true;
    },
    hideActivityDetails: (state) => {
      state.isShowed = false;
    },
  },
});

export const { setActivityDetails, showActivityDetails, hideActivityDetails } =
  activityDetailsSlice.actions;

export default activityDetailsSlice.reducer;
