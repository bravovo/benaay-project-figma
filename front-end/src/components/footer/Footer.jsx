import { Container } from "../layout";
import "./Footer.css";

import hammer from "../../assets/icons/hammer.svg";

import email from "../../assets/icons/email.svg";
import location from "../../assets/icons/location.svg";
import phone from "../../assets/icons/phone.svg";
import Contact from "../contact/Contact";
import { useTranslation } from "react-i18next";

function Footer() {
    const { t } = useTranslation();

    const contacts = [
        {
            icon: email,
            text: t("home.footer.contact.email"),
            link: `mailto:${t("home.footer.contact.email")}`,
        },
        {
            icon: location,
            text: t("home.footer.contact.location"),
            link: "#",
        },
        {
            icon: phone,
            text: t("home.footer.contact.phone"),
            link: `tel:${t("home.footer.contact.phone").replace(/\s+/g, "")}`,
        },
    ];
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
                            {t("home.footer.brandName")}
                        </a>
                        <p className="footer-main-para">
                            {t("home.footer.tagline")}
                        </p>
                    </div>
                    <div className="footer-links">
                        <a href="#">{t("home.footer.links.insulation")}</a>
                        <a href="#">{t("home.footer.links.electrical")}</a>
                        <a href="#">{t("home.footer.links.paints")}</a>
                        <a href="#">{t("home.footer.links.powerTools")}</a>
                        <a href="#">{t("home.footer.links.health")}</a>
                        <a href="#">{t("home.footer.links.safety")}</a>
                        <a href="#">{t("home.footer.links.pipes")}</a>
                        <a href="#">{t("home.footer.links.handTools")}</a>
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
                    <p>{t("home.footer.copyright")}</p>
                    <div className="rights-links">
                        <a href="#">{t("home.footer.legalLinks.terms")}</a>
                        <a href="#">{t("home.footer.legalLinks.privacy")}</a>
                        <a href="#">{t("home.footer.legalLinks.cookies")}</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
