import "./MainSection.css";

import { transparentBtn, coloredBtn } from "../../styles/styledObjects";
import { Container } from "../layout/index";
import Button from "../button/Button";

import mainImg from "../../assets/images/main-img.jpg";
import { openModal } from "../../state/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";

function MainSection() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);

    const onStartClick = () => {
        dispatch(openModal({ type: "login" }));
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
                        <h1>Bannai - Building Materials Market</h1>
                        <p>
                            B2B platform specializing in plumbing and building
                            materials compare prices and order from certified
                            suppliers
                        </p>
                    </div>
                    <div className="main-section-buttons">
                        {user.isLoggedIn ? null : (
                            <Button
                                title="Start now"
                                onClick={onStartClick}
                                styles={{ ...coloredBtn, width: "200px" }}
                            />
                        )}
                        <Button
                            title="Browse the catalog"
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
