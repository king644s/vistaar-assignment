import { combineReducers, configureStore } from "@reduxjs/toolkit";
import medicineSLice from "./slices/medicineSlice";

const rootReducers = combineReducers({
  medicine: medicineSLice,
});

export const store = configureStore({
  reducer: rootReducers,
});
