import "./ModalForm.css";

import closeModal from "../../assets/icons/x.svg";
import { useEffect, useRef } from "react";

function ModalForm({
    title,
    description,
    isOpen,
    isClosable,
    onClose,
    children,
    onSubmit,
}) {
    const formRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                if (isClosable) {
                    onClose();
                }
            }
        };

        if (!isOpen) return;

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
                        <img src={closeModal} alt="Close Modal" />
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
