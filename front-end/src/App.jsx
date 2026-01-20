import "./App.css";

import { Layout } from "./components/layout";
import ApprovedSuppliers from "./components/approvedSuppliers/ApprovedSuppliers";

import MainSection from "./components/mainSection/MainSection";
import OurAdvantages from "./components/ourAdvantages/OurAdvantages";
import MainCategories from "./components/mainCategories/MainCategories";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/footer/Footer";
import HeaderWrapper from "./components/headerWrapper/HeaderWrapper";
import { AuthProvider } from "./context/AuthContext";

function App() {
    return (
        <AuthProvider>
            <Layout>
                <HeaderWrapper />
                <main className="main">
                    <MainSection />
                    <ApprovedSuppliers />
                    <OurAdvantages />
                    <MainCategories />
                    <GetStarted />
                </main>
                <Footer />
            </Layout>
        </AuthProvider>
    );
}

export default App;
