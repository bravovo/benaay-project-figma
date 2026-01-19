import React from "react";
import "./IconButton.css";

function IconButton({ icon, title, onClick, ref }) {
    return (
        <button className="icon-button" onClick={onClick} ref={ref}>
            <img src={icon} alt={title} className="icon-button-image" />
        </button>
    );
}

export default IconButton;
