import "./Advantage.css";

function Advantage({ icon, title, description }) {
    return (
        <div className="advantage">
            <img src={icon} alt={title} className="advantage-icon" />
            <div className="advantage-content">
                <h3 className="advantage-title">{title}</h3>
                <p className="advantage-description">{description}</p>
            </div>
        </div>
    );
}

export default Advantage;
