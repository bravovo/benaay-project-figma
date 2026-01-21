import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    short: "Eng",
    name: "English",
    i18n: "en",
};

const langSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang(_, action) {
            localStorage.setItem("lang", action.payload.i18n);
            return { ...action.payload };
        },
    },
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;
