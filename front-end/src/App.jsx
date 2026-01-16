import "./App.css";

import { Layout, Container } from "./components/layout";
import ApprovedSuppliers from "./components/approvedSuppliers/ApprovedSuppliers";

import Header from "./components/header/Header";
import MainSection from "./components/mainSection/MainSection";

function App() {
    return (
        <Layout>
            <Header />
            <main className="main">
                <MainSection />
                <ApprovedSuppliers />

                {/* <Container>
                    <section className="content-section">
                        <h2>Inter Font</h2>
                        <p style={{ fontWeight: 400 }}>
                            Regular (400) - The default font weight for body
                            text.
                        </p>
                        <p style={{ fontWeight: 500 }}>
                            Medium (500) - Used for emphasis and subtle
                            headings.
                        </p>
                        <p style={{ fontWeight: 600 }}>
                            SemiBold (600) - Used for headings and strong
                            emphasis.
                        </p>
                    </section>
                </Container> */}

                {/* Full-width section - outside Container */}
                {/* <section className="full-width-section">
                    <div className="full-width-content">
                        <h2>Full-Width Section</h2>
                        <p>
                            This section spans the entire viewport width,
                            demonstrating how to break out of the Container
                            padding when needed.
                        </p>
                    </div>
                </section> */}

                {/* Back to Container-wrapped content */}
                {/* <Container>
                    <section className="content-section">
                        <h2>Flexible Layout</h2>
                        <p>
                            The layout system allows you to freely mix
                            Container-wrapped content with full-width sections,
                            providing maximum flexibility for your designs.
                        </p>
                    </section>
                </Container> */}
            </main>
        </Layout>
    );
}

export default App;
