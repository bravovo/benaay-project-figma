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
            .addCase(getUser.fulfilled, (state, action) => {
                console.log("PAYLOAD", action.payload.token);
                return {
                    ...state,
                    ...action.payload,
                    id: action.payload._id,
                    isLoggedIn: true,
                };
            })
            .addCase(getUser.rejected, (state) => {
                return { ...state, isLoggedIn: false };
            })
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem("token", action.payload.token);
                return { ...state, ...action.payload, isLoggedIn: true };
            })
            .addCase(login.rejected, (state) => {
                return { ...state, isLoggedIn: false };
            })
            .addCase(logout.fulfilled, () => {
                localStorage.removeItem("token");
                return { ...initialState };
            });
    },
});

export const getUser = createAsyncThunk(
    "user/profile",
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get(
                `${import.meta.env.VITE_API_SERVER_URL}/api/user/profile`,
                {
                    headers: {
                        Authorization: `Bearer ${
                            localStorage.getItem("token") || ""
                        }`,
                    },
                    withCredentials: true,
                }
            );

            if (response.data.success) {
                const userData = response.data.user;
                if (response.data.token) {
                    userData.token = response.data.token;
                    localStorage.setItem("token", response.data.token);
                }
                return userData;
            }
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

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
