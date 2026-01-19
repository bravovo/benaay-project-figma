import "./SectionText.css";

import { Container } from "../layout/index";

function SectionText({ title, paragraph, width }) {
    return (
        <div className="section-content" style={{ width }}>
            <h2 className="section-title">{title}</h2>
            <p className="section-para">{paragraph}</p>
        </div>
    );
}

export default SectionText;
