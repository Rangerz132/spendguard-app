import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfilType } from "../../components/Profil/ProfilType";

type ProfilsState = {
  profils: ProfilType[];
  userProfil: ProfilType | null;
};

const initialState: ProfilsState = {
  profils: [],
  userProfil: null,
};

export const profilsSlice = createSlice({
  name: "profils",
  initialState,
  reducers: {
    setProfils: (state, action: PayloadAction<ProfilType[]>) => {
      state.profils = action.payload;
    },
    addProfil: (state, action: PayloadAction<ProfilType>) => {
      state.profils.push(action.payload);
    },
    deleteProfil: (state, action: PayloadAction<string>) => {
      state.profils = state.profils.filter(
        (profil) => profil.id !== action.payload
      );
    },
    updateProfil: (state, action: PayloadAction<ProfilType>) => {
      const index = state.profils.findIndex(
        (profil) => profil.id === action.payload.id
      );
      if (index !== -1) {
        state.profils[index] = action.payload;
      }
    },
    setUserProfil: (state, action: PayloadAction<ProfilType>) => {
      state.userProfil = action.payload;
    },
  },
});

export const {
  setProfils,
  addProfil,
  deleteProfil,
  updateProfil,
  setUserProfil,
} = profilsSlice.actions;

export default profilsSlice.reducer;
