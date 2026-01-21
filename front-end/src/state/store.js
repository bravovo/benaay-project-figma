import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";
import langSlice from "./slices/langSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        modals: modalReducer,
        lang: langSlice,
    },
});
