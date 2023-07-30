import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PackageItemType } from "../utils/types";

export const basketSlice = createSlice({
  name: "packages",
  initialState: {
    packages: [],
  },
  reducers: {
    selectPackage: (state: any, action: PayloadAction<PackageItemType>) => {
      const findIndex = state.packages.findIndex(
        (p: PackageItemType) => p.id === action.payload.id
      );
      if (findIndex >= 0) {
        state.packages.splice(findIndex, 1);
      } else {
        state.packages.push(action.payload);
      }
    },
  },
});

export const { selectPackage } = basketSlice.actions;

export default basketSlice.reducer;
