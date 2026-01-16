import "./SectionText.css";

import { Container } from "../layout/index";

function SectionText({ title, paragraph, width }) {
    return (
        <Container>
            <div className="section-content" style={{ width }}>
                <h2 className="section-title">{title}</h2>
                <p className="section-para">{paragraph}</p>
            </div>
        </Container>
    );
}

export default SectionText;
