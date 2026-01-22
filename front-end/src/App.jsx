import "./App.css";

import { Layout } from "./components/layout";
import ApprovedSuppliers from "./components/approvedSuppliers/ApprovedSuppliers";

import MainSection from "./components/mainSection/MainSection";
import OurAdvantages from "./components/ourAdvantages/OurAdvantages";
import MainCategories from "./components/mainCategories/MainCategories";
import GetStarted from "./components/getStarted/GetStarted";
import { Footer } from "./features/footer/index";
import { Header } from "./features/header/index";
import { AuthFormsLayout } from "./features/auth/index";

function App() {
    return (
        <Layout>
            <AuthFormsLayout />
            <Header />
            <main className="main">
                <MainSection />
                <ApprovedSuppliers />
                <OurAdvantages />
                <MainCategories />
                <GetStarted />
            </main>
            <Footer />
        </Layout>
    );
}

export default App;
