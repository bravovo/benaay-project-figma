import { Container } from "../layout";
import "./Footer.css";

import hammer from "../../assets/icons/hammer.svg";

import email from "../../assets/icons/email.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import Contact from "../contact/Contact";

const contacts = [
    {
        icon: email,
        text: "hi@untitledui.com",
        link: "mailto:hi@untitledui.com",
    },
    {
        icon: location,
        text: "100 Smith Street Collingwood VIC 3066 AU",
        link: "#",
    },
    {
        icon: phone,
        text: "+1 (555) 000-0000",
        link: "tel:+15550000000",
    },
];
function Footer() {
    return (
        <footer className="footer-container">
            <Container>
                <div className="links-container">
                    <div className="footer-main">
                        <a
                            href="#"
                            style={{ textDecoration: "none" }}
                            className="footer-icon-container"
                        >
                            <img
                                src={hammer}
                                alt="Hammer Icon"
                                className="header-icon"
                            />
                            Bennay
                        </a>
                        <p className="footer-main-para">
                            Join hundreds of contractors and plumbers who use
                            Bannai to save time and money
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="#">Insulation materials</a>
                        <a href="#">Electrical supplies</a>
                        <a href="#">Exterior paints</a>
                        <a href="#">Power tools</a>
                        <a href="#">Health products</a>
                        <a href="#">Safety equipment</a>
                        <a href="#">Pipes and valves</a>
                        <a href="#">Hand tools</a>
                    </div>
                    <div className="footer-contacts">
                        {contacts &&
                            contacts.map((contact, index) => {
                                return <Contact key={index} {...contact} />;
                            })}
                    </div>
                </div>
            </Container>
            <Container>
                <div className="rights-container">
                    <p>© 2025 Logo. All rights reserved.</p>
                    <div className="rights-links">
                        <a href="#">Terms</a>
                        <a href="#">Privacy</a>
                        <a href="#">Cookies</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
