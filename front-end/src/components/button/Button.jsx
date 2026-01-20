function Button({ title, onClick, styles, type = "button" }) {
    return (
        <button style={{ ...styles }} onClick={onClick} type={type}>
            {title}
        </button>
    );
}
export default Button;
