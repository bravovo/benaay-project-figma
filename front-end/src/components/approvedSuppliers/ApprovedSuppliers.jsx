import "./ApprovedSuppliers.css";

import logo1 from "../../assets/icons/suppliers/Logomark-1.svg";
import logo2 from "../../assets/icons/suppliers/Logomark-2.svg";
import logo3 from "../../assets/icons/suppliers/Logomark-3.svg";
import logo4 from "../../assets/icons/suppliers/Logomark-4.svg";
import logo5 from "../../assets/icons/suppliers/Logomark-5.svg";
import logo6 from "../../assets/icons/suppliers/Logomark-6.svg";
import logo7 from "../../assets/icons/suppliers/Logomark-7.svg";
import SliderLogo from "./sliderLogo/SliderLogo";
import SectionText from "../sectionText/SectionText";
import { Container } from "../layout";
import { useTranslation } from "react-i18next";

function ApprovedSuppliers() {
    const { t } = useTranslation();

    const logos = [
        logo1,
        logo2,
        logo3,
        logo4,
        logo5,
        logo6,
        logo7,
        logo5,
        logo3,
    ];

    const suppliers = [...logos, ...logos].map((logo, index) => ({
        imgSrc: logo,
        altText: t("home.approvedSuppliers.supplierLogoAlt", {
            number: index + 1,
        }),
        linkUrl: "#",
        logoTitle: t("home.approvedSuppliers.logoTitle"),
    }));
    return (
        <section className="suppliers-section">
            <Container>
                <SectionText
                    title={t("home.approvedSuppliers.title")}
                    paragraph={t("home.approvedSuppliers.description")}
                    width={612}
                    gap={12}
                />
            </Container>
            <div className="logo-slider-container">
                <div className="logo-slider">
                    {suppliers &&
                        suppliers.map((sup) => {
                            return (
                                <SliderLogo
                                    key={sup.altText}
                                    imgSrc={sup.imgSrc}
                                    altText={sup.altText}
                                    logoTitle={sup.logoTitle}
                                    linkUrl={sup.linkUrl}
                                />
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

export default ApprovedSuppliers;
