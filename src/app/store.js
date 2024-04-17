import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import uiReducer from "../features/uiSlice";
import { propertySlice } from "./slices/Poperty";

export default configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
    property: propertySlice
  }
});
