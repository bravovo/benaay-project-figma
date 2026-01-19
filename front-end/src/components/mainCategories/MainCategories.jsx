import "./MainCategories.css";
import SectionText from "../sectionText/SectionText";
import Category from "../category/Category";
import { Container } from "../layout";

import { categories } from "../../assets/constants";

function MainCategories() {
    return (
        <section className="main-cats-section">
            <Container>
                <SectionText
                    title="Main Categories"
                    paragraph="Quickly find the materials you need. Choose a category and explore ready offers from trusted suppliers"
                    width={980}
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
