import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import profilDataReducer from "../features/profilDataSlice";
import editReducer from "../features/editSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        profilData: profilDataReducer,
        edit: editReducer,
    },
})