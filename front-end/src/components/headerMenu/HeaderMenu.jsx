import "./HeaderMenu.css";
import LanguageSelect from "../langSelect/LanguageSelect";
import { languages } from "../../assets/constants";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../state/slices/modalSlice";
import { logout } from "../../state/slices/userSlice";
import { transparentBtn } from "../../styles/styledObjects";
import Button from "../button/Button";
import { useTranslation } from "react-i18next";

function HeaderMenu() {
    const { t } = useTranslation();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const onLoginClick = () => {
        dispatch(openModal({ type: "login" }));
    };

    const onlogoutClick = () => {
        dispatch(logout());
    };

    return (
        <div className="header-menu-container">
            <div className="menu-head">
                <h1>{t("home.headerMenu.title")}</h1>
                <LanguageSelect languages={languages} color="#206BB6" />
            </div>
            <div className="menu-links">
                <a href="#">{t("home.headerMenu.link1")}</a>
                <a href="#">{t("home.headerMenu.link2")}</a>
                <a href="#">{t("home.headerMenu.link3")}</a>
                <a href="#">{t("home.headerMenu.link4")}</a>
                <a href="#">{t("home.headerMenu.link5")}</a>
            </div>
            <div className="menu-button">
                {user.isLoggedIn ? (
                    <Button
                        title={t("home.headerMenu.logoutButton")}
                        onClick={onlogoutClick}
                        styles={{
                            ...transparentBtn,
                            borderColor: "#206BB6",
                            color: "#206BB6",
                        }}
                    />
                ) : (
                    <Button
                        title={t("home.headerMenu.loginButton")}
                        onClick={onLoginClick}
                        styles={{
                            ...transparentBtn,
                            borderColor: "#206BB6",
                            color: "#206BB6",
                        }}
                    />
                )}
            </div>
        </div>
    );
}

export default HeaderMenu;
