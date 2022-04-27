import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import meetingReducer from "./meetings";

const store = configureStore({
  reducer: {
    auth: authReducer,
    meetings: meetingReducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
