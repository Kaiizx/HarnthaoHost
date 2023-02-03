import classes from "./Addperson.module.css";
import React from "react";
import Checkbox from "./Checkbox";

const Addperson = (props) => {

  return (
    <React.Fragment>
      <form className={classes["flex-form"]}>
        <input
          type="search"
          onChange={props.onChange}
          placeholder="Name"
          value={props.addper}
        />
        <input type="button" onClick={props.onClick} value="+ ADD" />
      </form>

    </React.Fragment>
  );
};
export default Addperson;
