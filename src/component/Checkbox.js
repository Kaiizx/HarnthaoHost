import classes from"./Checkbox.css";
const Checkbox = (props) => {
  return (
    <div className="checkbox-wrapper-16">
        <label className="checkbox-wrapper">
          <input type="checkbox" className="checkbox-input" />
          <span className="checkbox-tile">
            <span className="checkbox-label">{props.name}</span>
          </span>
        </label>
      </div>
  );
};
export default Checkbox;
