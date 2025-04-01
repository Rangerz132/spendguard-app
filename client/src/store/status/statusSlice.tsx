import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StatusState = {
  message: string;
  isShowed: boolean;
  isValid: boolean;
};

const initialState: StatusState = {
  message: "",
  isShowed: false,
  isValid: false,
};

export const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<StatusState>) => {
      Object.assign(state, action.payload);
    },
    setStatusMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    showStatus: (state) => {
      state.isShowed = true;
    },
    hideStatus: (state) => {
      state.isShowed = false;
    },
  },
});

export const { setStatus, setStatusMessage, showStatus, hideStatus } =
  statusSlice.actions;

export default statusSlice.reducer;
