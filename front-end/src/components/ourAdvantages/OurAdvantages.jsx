import { Container } from "../layout/index";
import SectionText from "../sectionText/SectionText";
import Advantage from "../advantage/Advantage";

import fastDeliveryIcon from "../../assets/icons/fast-delivery.svg";
import comparePrices from "../../assets/icons/compare-prices.svg";
import uploadList from "../../assets/icons/upload-list.svg";

import "./OurAdvantages.css";
import { useTranslation } from "react-i18next";

function Advantages() {
    const { t } = useTranslation();

    const advantages = [
        {
            icon: fastDeliveryIcon,
            title: t("home.advantages.fastDelivery.title"),
            description: t("home.advantages.fastDelivery.description"),
        },
        {
            icon: comparePrices,
            title: t("home.advantages.comparePrices.title"),
            description: t("home.advantages.comparePrices.description"),
        },
        {
            icon: uploadList,
            title: t("home.advantages.uploadList.title"),
            description: t("home.advantages.uploadList.description"),
        },
    ];

    return (
        <section className="advantages-section">
            <Container>
                <SectionText
                    title={t("home.advantages.sectionTitle")}
                    paragraph={t("home.advantages.sectionDescription")}
                    width={900}
                    gap={20}
                />
            </Container>
            <Container>
                <div className="advantages-container">
                    {advantages &&
                        advantages.map((ad) => (
                            <Advantage
                                key={ad.title}
                                icon={ad.icon}
                                title={ad.title}
                                description={ad.description}
                            />
                        ))}
                </div>
            </Container>
        </section>
    );
}

export default Advantages;
