import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import modalReducer from "./slices/modalSlice";
import langSlice from "./slices/langSlice";
import routeSlice from "./slices/routeSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        modals: modalReducer,
        lang: langSlice,
        route: routeSlice,
    },
});
