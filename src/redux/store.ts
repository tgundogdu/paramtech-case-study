import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import basketSlice from "./basket-slice";

export default configureStore({
  reducer: {
    auth: authSlice,
    basket: basketSlice,
  },
});
