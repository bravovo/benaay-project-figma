import hammer from "./assets/icons/hammer.svg";
import search from "./assets/icons/search.svg";
import shoppingCart from "./assets/icons/shopping-cart.svg";
import "./App.css";

import { Layout, Container } from "./components/layout";
import LanguageSelect from "./components/langSelect/LanguageSelect";
import IconButton from "./components/iconButton/IconButton";

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
                            <button className="login-button">Log In</button>
                        </div>
                    </div>
                </Container>
            </header>

            {/* Regular content with Container padding */}
            <main className="main">
                <Container>
                    <section className="content-section">
                        <h2>Container Component</h2>
                        <p>
                            This content is wrapped in a Container component
                            with 80px horizontal padding. The Container ensures
                            consistent spacing for regular page content.
                        </p>
                    </section>

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
