import "./FilterModal.css";

function FilterModal({ onClose }) {
    const applyFilter = (e) => {
        e.preventDefault();
        onClose();
    };

    return <div></div>;
}

export default FilterModal;
