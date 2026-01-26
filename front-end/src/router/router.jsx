import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/main/Main";
import Catalog from "../pages/catalog/Catalog";
import CatalogLayout from "../components/catalogLayout/CatalogLayout";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="catalog" element={<CatalogLayout />}>
                <Route index element={<Catalog />} />
                <Route path="product" element={<h1>Catalog product</h1>} />
                <Route path="*" element={<h1>404 | Page not found</h1>} />
            </Route>
        </Routes>
    );
}

export default Router;
