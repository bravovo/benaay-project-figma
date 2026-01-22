import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/Main";

export const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: <MainPage />,
    },
    {
        path: "*",
        element: <h1>404 | Page not found</h1>,
    },
]);
