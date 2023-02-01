import classes from "./Addorder.module.css";
import React, { useState } from "react";
import './Checkbox.css'
import Checkbox from "./Checkbox";


const AddOrder = (props) => {
  const [nameChecked,setNameChecked]=useState([])
  const checkhandler=(name,check)=>{
    if(check===true){
      setNameChecked([...nameChecked,name])
    }
    else{
      setNameChecked(nameChecked.filter(element=>element !==name))
    }

  }
  const onClickAdd=()=>{
    props.onClickor()
    props.checkname(nameChecked)
  }
  const personlist = props.perlist.map((person) => (
    <Checkbox key={person.id} name={person.name} check={checkhandler} />
  ))
  return (
    <React.Fragment>
    <form>
      <div className={classes["flex-form"]}>
        <input
          type="search"
          onChange={props.onChangeor}
          placeholder="Order"
          value={props.addor}
        />
      </div>
      <div className={classes["flex-form"]}>
      <input
        type="search"
        onChange={props.onChangepr}
        placeholder="Price"
        value={props.addpr}
      />
      </div>
      <div className={classes["flex-form"]}>

      </div>


    </form>
    <div className={classes.wrapper}>
    {personlist}
    </div>
    <div className={classes.but}>
    <input type="button" onClick={onClickAdd} value="+ ADD" />
    </div>
    
    </React.Fragment>

  );
};
export default AddOrder;
