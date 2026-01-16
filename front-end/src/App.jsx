import hammer from "./assets/icons/hammer.svg";
import search from "./assets/icons/search.svg";
import shoppingCart from "./assets/icons/shopping-cart.svg";
import mainImg from "./assets/images/main-img.jpg";
import "./App.css";

import { Layout, Container } from "./components/layout";
import LanguageSelect from "./components/langSelect/LanguageSelect";
import IconButton from "./components/iconButton/IconButton";
import Button from "./components/button/Button";
import ApprovedSuppliers from "./components/approvedSuppliers/ApprovedSuppliers";

const transparentBtn = {
    fontWeight: 500,
    fontSize: "16px",
    color: "#ffffff",
    padding: "12px 24px",
    backgroundColor: "transparent",
    border: "1px solid #ffffff",
    borderRadius: "8px",
};

const coloredBtn = {
    width: "200px",
    fontSize: "16px",
    color: "#ffffff",
    padding: "12px 24px",
    backgroundColor: "#206BB6",
    border: "1px solid #206BB6",
    borderRadius: "8px",
};

function App() {
    return (
        <Layout>
            <header className="header">
                <Container>
                    <div className="header-container">
                        <a href="#" style={{ textDecoration: "none" }}>
                            <div className="icon-container">
                                <img
                                    src={hammer}
                                    alt="Hammer Icon"
                                    className="header-icon"
                                />
                                <h2 className="header-title">Bennay</h2>
                            </div>
                        </a>
                        <div className="header-links">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                            <a href="#">Link 4</a>
                            <a href="#">Link 5</a>
                        </div>
                        <div className="header-buttons">
                            <IconButton
                                icon={search}
                                title="Search Icon"
                                onClick={() => {}}
                            />
                            <IconButton
                                icon={shoppingCart}
                                title="Shopping cart icon"
                                onClick={() => {}}
                            />
                            <LanguageSelect />
                            <Button
                                title="Log In"
                                onClick={() => {}}
                                styles={transparentBtn}
                            />
                        </div>
                    </div>
                </Container>
            </header>

            <main className="main">
                <section
                    className="content-section content-section-container"
                    style={{
                        backgroundImage: `url(${mainImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <Container>
                        <div className="main-section-content">
                            <div className="main-section-text">
                                <h2>Bannai - Building Materials Market</h2>
                                <p>
                                    B2B platform specializing in plumbing and
                                    building materials compare prices and order
                                    from certified suppliers
                                </p>
                            </div>
                            <div className="main-section-buttons">
                                <Button
                                    title="Start now"
                                    onClick={() => {}}
                                    styles={coloredBtn}
                                />
                                <Button
                                    title="Browse the catalog"
                                    onClick={() => {}}
                                    styles={{
                                        ...transparentBtn,
                                        width: "200px",
                                    }}
                                />
                            </div>
                        </div>
                    </Container>
                </section>
                <ApprovedSuppliers />

                <Container>
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
                </Container>

                {/* Full-width section - outside Container */}
                <section className="full-width-section">
                    <div className="full-width-content">
                        <h2>Full-Width Section</h2>
                        <p>
                            This section spans the entire viewport width,
                            demonstrating how to break out of the Container
                            padding when needed.
                        </p>
                    </div>
                </section>

                {/* Back to Container-wrapped content */}
                <Container>
                    <section className="content-section">
                        <h2>Flexible Layout</h2>
                        <p>
                            The layout system allows you to freely mix
                            Container-wrapped content with full-width sections,
                            providing maximum flexibility for your designs.
                        </p>
                    </section>
                </Container>
            </main>
        </Layout>
    );
}

export default App;
