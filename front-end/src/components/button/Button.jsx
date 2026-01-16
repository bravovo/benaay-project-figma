function Button({ title, onClick, styles }) {
    return (
        <button style={{ ...styles }} onClick={onClick}>
            {title}
        </button>
    );
}
export default Button;
