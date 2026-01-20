import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { store } from "./state/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App />
    </Provider>
);
