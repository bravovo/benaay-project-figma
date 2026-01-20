import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    email: "",
    fullName: "",
    id: "",
    isLoggedIn: false,
    token: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                return { ...state, ...action.payload, isLoggedIn: true };
            })
            .addCase(login.rejected, (state) => {
                return { ...state, isLoggedIn: false };
            })
            .addCase(logout.fulfilled, () => {
                return { ...initialState };
            });
    },
});

export const login = createAsyncThunk(
    "user/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const { email, password } = credentials;
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/login`,
                {
                    email,
                    password,
                },
                {
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                return {
                    email: response.data.user.email,
                    fullName: response.data.user.fullName,
                    id: response.data.user._id,
                    token: response.data.accessToken,
                };
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk(
    "user/logout",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_SERVER_URL}/api/auth/logout`,
                {},
                {
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                return {};
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export default userSlice.reducer;
