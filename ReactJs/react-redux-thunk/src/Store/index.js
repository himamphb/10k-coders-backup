import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./Reducers/usersReducer";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: usersReducer,
  devTools: true,
  middleware:[thunk]
});
