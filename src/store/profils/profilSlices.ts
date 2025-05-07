import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfilType } from "../../components/Profil/ProfilType";

const initialState: ProfilType[] = [];

export const profilsSlice = createSlice({
  name: "profils",
  initialState,
  reducers: {
    setProfils: (_state, action: PayloadAction<ProfilType[]>) => {
      return action.payload;
    },
    addProfil: (state, action: PayloadAction<ProfilType>) => {
      state.push(action.payload);
    },
    deleteProfil: (state, action: PayloadAction<string>) => {
      return state.filter((profil) => profil.id !== action.payload);
    },
    updateProfil: (state, action) => {
      const index = state.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
  },
});

export const { setProfils, addProfil, deleteProfil, updateProfil } =
  profilsSlice.actions;

export default profilsSlice.reducer;
