import { Container } from "../layout/index";
import SectionText from "../sectionText/SectionText";
import Advantage from "../advantage/Advantage";

import fastDeliveryIcon from "../../assets/icons/fast-delivery.svg";
import comparePrices from "../../assets/icons/compare-prices.svg";
import uploadList from "../../assets/icons/upload-list.svg";

import "./OurAdvantages.css";

const advantages = [
    {
        icon: fastDeliveryIcon,
        title: "Fast delivery",
        description:
            "Receive your order quickly — guaranteed delivery across all regions of the Kingdom",
    },
    {
        icon: comparePrices,
        title: "Compare prices",
        description:
            "Get instant quotes from trusted suppliers and choose the best offer for your needs",
    },
    {
        icon: uploadList,
        title: "Upload your list",
        description:
            "Upload a photo or PDF of your materials list — we’ll find matching products for you",
    },
];

function Advantages() {
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
