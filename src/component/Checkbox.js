import { useState } from "react";
import classes from"./Checkbox.css";
const Checkbox = (props) => {
    const [check,setcheck]=useState(false)
    const handler=(event)=>{
        
            props.check(props.name,event.target.checked)
        
    }
  



  return (
    <div className="checkbox-wrapper-16">
        <label className="checkbox-wrapper">
          <input type="checkbox" className="checkbox-input" value={props.name} onChange={handler} />
          <span className="checkbox-tile">
            <span className="checkbox-label">{props.name}</span>
          </span>
        </label>
      </div>
  );
};
export default Checkbox;
