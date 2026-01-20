import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
    type: null,
    props: {},
};

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = true;
            document.body.classList.add("modal-open");
            state.type = action.payload.type;
            state.props = action.payload.props || {};
        },
        closeModal: (state) => {
            state.isOpen = false;
            document.body.classList.remove("modal-open");
            state.type = null;
            state.props = {};
        },
    },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
