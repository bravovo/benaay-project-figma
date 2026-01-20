import "./SectionText.css";

function SectionText({ title, paragraph, width, gap }) {
    return (
        <div className="section-content" style={{ maxWidth: width, gap }}>
            <h2 className="section-title">{title}</h2>
            <p className="section-para">{paragraph}</p>
        </div>
    );
}

export default SectionText;
