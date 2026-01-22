import "./MainCategories.css";
import SectionText from "../sectionText/SectionText";
import Category from "../category/Category";
import { Container } from "../layout";

import { getCategoriesConfig } from "../../data/constants";
import { useTranslation } from "react-i18next";

function MainCategories() {
    const { t } = useTranslation();
    const categories = getCategoriesConfig(t);

    return (
        <section className="main-cats-section">
            <Container>
                <SectionText
                    title={t("home.categories.sectionTitle")}
                    paragraph={t("home.categories.sectionDescription")}
                    width={980}
                    gap={20}
                />
            </Container>
            <Container>
                <div className="categories-container">
                    {categories &&
                        categories.map((cat, index) => {
                            return (
                                <Category
                                    key={index}
                                    number={index + 1}
                                    {...cat}
                                />
                            );
                        })}
                </div>
            </Container>
        </section>
    );
}

export default MainCategories;
