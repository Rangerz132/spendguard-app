import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ActivityType } from "../../components/Activity/type/ActivityType";

const initialState: ActivityType[] = [];

export const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    setActivities: (_state, action: PayloadAction<ActivityType[]>) => {
      return action.payload;
    },
    addActivity: (state, action: PayloadAction<ActivityType>) => {
      state.push(action.payload);
    },
    deleteActivity: (state, action: PayloadAction<string>) => {
      return state.filter((activity) => activity.id !== action.payload);
    },
    updateActivity: (state, action) => {
      const index = state.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setActivities, addActivity, deleteActivity, updateActivity } =
  activitiesSlice.actions;

export default activitiesSlice.reducer;
