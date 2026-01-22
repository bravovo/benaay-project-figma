import { createRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";
import { store } from "./state/store.js";
import { Provider } from "react-redux";
import "./utils/i18n/index.js";
import LanguageProvider from "./components/languageProvider/LanguageProvider.jsx";
import { UserProvider } from "./features/auth/index";

createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <LanguageProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </LanguageProvider>
    </Provider>
);
