import "./MainSection.css";

import { transparentBtn, coloredBtn } from "../../styles/styledObjects";
import { Container } from "../layout/index";
import Button from "../button/Button";

import mainImg from "../../assets/images/main-img.jpg";

function MainSection() {
    return (
        <section
            className="main-section main-section-container"
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
                            B2B platform specializing in plumbing and building
                            materials compare prices and order from certified
                            suppliers
                        </p>
                    </div>
                    <div className="main-section-buttons">
                        <Button
                            title="Start now"
                            onClick={() => {}}
                            styles={{ ...coloredBtn, width: "200px" }}
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
    );
}

export default MainSection;
