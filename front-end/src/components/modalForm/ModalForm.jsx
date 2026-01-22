import "./ModalForm.css";

import closeModal from "../../assets/icons/x.svg";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function ModalForm({
    title,
    description,
    isOpen,
    isClosable,
    onClose,
    children,
    onSubmit,
}) {
    const { t } = useTranslation();
    const formRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                if (isClosable) {
                    onClose();
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose, isClosable]);

    if (!isOpen) return null;

    return (
        <div className="modal-container">
            <form
                className="modal-form-container"
                onSubmit={onSubmit}
                ref={formRef}
            >
                {isClosable && (
                    <button className="modal-close-btn" onClick={onClose}>
                        <img src={closeModal} alt={t("modal.closeAlt")} />
                    </button>
                )}
                <div className="modal-text">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="modal-content">{children}</div>
            </form>
        </div>
    );
}

export default ModalForm;
