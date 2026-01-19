import "./Contact.css";

function Contact({ icon, text, link }) {
    return (
        <a href={link} className="contact-container">
            <img src={icon} alt={text} />
            {text}
        </a>
    );
}

export default Contact;
