import React from "react";
import "./IconButton.css";

function IconButton({ icon, title, onClick }) {
    return (
        <button className="icon-button" onClick={onClick}>
            <img src={icon} alt={title} className="icon-button-image" />
        </button>
    );
}

export default IconButton;
