import { Outlet } from "react-router-dom";
import { Layout } from "../layout";
import { Header } from "../../features/header";
import { Footer } from "../../features/footer";

function CatalogLayout() {
    return (
        <Layout>
            <Outlet />
        </Layout>
    );
}

export default CatalogLayout;
