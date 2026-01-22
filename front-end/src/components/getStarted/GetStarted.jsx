import { coloredBtn } from "../../styles/styledObjects";
import Button from "../button/Button";
import { Container } from "../layout";
import SectionText from "../sectionText/SectionText";
import "./GetStarted.css";

import getStartedImg from "../../assets/icons/get-started-pic.svg";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../state/slices/modalSlice";
import { useTranslation } from "react-i18next";

function GetStarted() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const onStartClick = () => {
        dispatch(openModal({ type: "register" }));
    };

    return (
        <section className="get-started-section">
            <Container>
                <div className="get-started-container">
                    <div className="get-started-content">
                        <SectionText
                            title={t("home.getStarted.title")}
                            paragraph={t("home.getStarted.description")}
                            width={524}
                            gap={16}
                        />
                        {user.isLoggedIn ? null : (
                            <Button
                                title={t("home.getStarted.registerButton")}
                                onClick={onStartClick}
                                styles={{
                                    ...coloredBtn,
                                    width: "214px",
                                }}
                            />
                        )}
                    </div>
                    <img
                        src={getStartedImg}
                        alt="Get started"
                        className="started-image"
                    />
                </div>
            </Container>
        </section>
    );
}

export default GetStarted;
