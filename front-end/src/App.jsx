import "./App.css";

import { Layout } from "./components/layout";
import ApprovedSuppliers from "./components/approvedSuppliers/ApprovedSuppliers";

import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";
import OurAdvantages from "./components/ourAdvantages/OurAdvantages";
import MainCategories from "./components/mainCategories/MainCategories";
import GetStarted from "./components/getStarted/GetStarted";

function App() {
    return (
        <Layout>
            <Header />
            <main className="main">
                <MainSection />
                <ApprovedSuppliers />
                <OurAdvantages />
                <MainCategories />
                <GetStarted />
            </main>
        </Layout>
    );
}

export default App;
