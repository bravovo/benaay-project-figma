import "./CheckBox.css";

function CheckBox({ item, checked, onChange }) {
    return (
        <div className="checkbox-container">
            <div className="checkbox-name">
                <label className="checkbox">
                    <input 
                        type="checkbox" 
                        checked={checked || false}
                        onChange={(e) => onChange(item.name, e.target.checked)}
                    />
                    <span className="checkbox-box"></span>
                </label>
                <label htmlFor={item} className="checkbox-label">
                    {item.name}
                </label>
            </div>
            <span className="checkbox-span">{item.count}</span>
        </div>
    );
}

export default CheckBox;
