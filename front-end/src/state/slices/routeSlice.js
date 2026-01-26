import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    routes: [{ title: "Main", path: "/" }],
    currentRoute: "/",
};

const routerSlice = createSlice({
    name: "router",
    initialState,
    reducers: {
        setRoute(state, action) {
            state.currentRoute = action.payload.currentRoute;
            state.routes = [...state.routes, action.payload.routes];
        },
        resetRoute() {
            return initialState;
        },
    },
});

export const { setRoute, resetRoute } = routerSlice.actions;

export default routerSlice.reducer;
