import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext(null);

// Helper function to initialize auth state from localStorage
const initializeAuthState = () => {
    const token = localStorage.getItem("accessToken");
    const storedUser = localStorage.getItem("user");
    
    if (token && storedUser) {
        try {
            const userData = JSON.parse(storedUser);
            return {
                user: userData,
                isAuthenticated: true,
            };
        } catch (error) {
            console.error("Error parsing stored user data:", error);
            // Clear invalid data
            localStorage.removeItem("accessToken");
            localStorage.removeItem("user");
        }
    }
    
    return {
        user: null,
        isAuthenticated: false,
    };
};

export const AuthProvider = ({ children }) => {
    // Use lazy initialization to avoid calling setState in useEffect
    const [authState, setAuthState] = useState(initializeAuthState);

    const login = (userData, token) => {
        setAuthState({
            user: userData,
            isAuthenticated: true,
        });
        localStorage.setItem("accessToken", token);
        localStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = () => {
        setAuthState({
            user: null,
            isAuthenticated: false,
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
    };

    const value = {
        user: authState.user,
        isAuthenticated: authState.isAuthenticated,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
