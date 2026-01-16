function Button({ title, onClick, styles }) {
    console.log(styles);

    return (
        <button style={{ ...styles }} onClick={onClick}>
            {title}
        </button>
    );
}
export default Button;
