import { coloredBtn } from "../../styles/styledObjects";
import Button from "../button/Button";
import { Container } from "../layout";
import SectionText from "../sectionText/SectionText";
import "./GetStarted.css";

import getStartedImg from "../../assets/icons/get-started-pic.svg";

function GetStarted() {
    return (
        <section className="get-started-section">
            <Container>
                <div className="get-started-container">
                    <div className="get-started-content">
                        <SectionText
                            title="Ready to get started?"
                            paragraph="Join hundreds of contractors and plumbers who use Bannai to save time and money"
                            width={524}
                            gap={16}
                        />
                        <Button
                            title="Register now for free"
                            onClick={() => {}}
                            styles={{
                                ...coloredBtn,
                                width: "214px",
                            }}
                        />
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
