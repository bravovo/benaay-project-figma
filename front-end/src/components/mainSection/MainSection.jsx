import "./MainSection.css";

import { transparentBtn, coloredBtn } from "../../styles/styledObjects";
import { Container } from "../layout/index";
import Button from "../button/Button";

import mainImg from "../../assets/images/main-img.jpg";
import { openModal } from "../../state/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function MainSection() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const onStartClick = () => {
        dispatch(openModal({ type: "register" }));
    };

    return (
        <section
            className="main-section main-section-container"
            style={{
                backgroundImage: `url(${mainImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <Container>
                <div className="main-section-content">
                    <div className="main-section-text">
                        <h1>{t("home.hero.title")}</h1>
                        <p>{t("home.hero.description")}</p>
                    </div>
                    <div className="main-section-buttons">
                        {user.isLoggedIn ? null : (
                            <Button
                                title={t("home.hero.startButton")}
                                onClick={onStartClick}
                                styles={{ ...coloredBtn, width: "200px" }}
                            />
                        )}
                        <Button
                            title={t("home.hero.browseButton")}
                            onClick={() => {}}
                            styles={{
                                ...transparentBtn,
                                width: "200px",
                            }}
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default MainSection;
