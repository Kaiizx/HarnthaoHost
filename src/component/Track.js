import React from "react";
import PersonIcon from "./icon/PersonIcon";
import Carticon from "./icon/CartIcon";
import classes from "./Track.module.css";
const Track = (props) => {
  return (
    <React.Fragment>
      <div className={classes.box}>
        <div>
          <div className={classes.subbox}>
            <div className={classes.picon}>
              <PersonIcon />
            </div>
            <div className={classes.text}>38</div>
          </div>
        </div>

        <div>
          <div className={classes.subbox}>
            <div className={classes.cicon}>
              <Carticon />
            </div>
            <div className={classes.text}>38</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Track;
