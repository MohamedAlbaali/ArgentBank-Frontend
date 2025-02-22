import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import profilDataReducer from "../features/profilDataSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profilData: profilDataReducer,
    },
})