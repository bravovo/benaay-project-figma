import "./SliderLogo.css";

function SliderLogo({ imgSrc, altText, linkUrl, logoTitle }) {
    return (
        <a
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="slider-link"
        >
            <img src={imgSrc} alt={altText} />
            <span>{logoTitle}</span>
        </a>
    );
}

export default SliderLogo;
