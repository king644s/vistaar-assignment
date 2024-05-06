import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const MedicineSlice = createSlice({
  name: "MedicineSlice",
  initialState,
  reducers: {
    addMedicinesReducer: (state, action) => {
      state.data = [...state.data, action.payload];
    },
  },
});

export const { addMedicinesReducer } = MedicineSlice.actions;

export default MedicineSlice.reducer;
