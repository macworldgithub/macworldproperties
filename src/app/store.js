import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../features/dataSlice";
import uiReducer from "../features/uiSlice";
import propertyReducer from "./slices/PopertySlice";

export default configureStore({
  reducer: {
    ui: uiReducer,
    data: dataReducer,
    property: propertyReducer
  }
});
