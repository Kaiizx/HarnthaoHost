import React from "react";
import classes from './AddCard.module.css'
import Modal from "./Modal";
const AddCard = (props) => {
  
    const cartModalContent = (
        <React.Fragment>
          <div className={classes.header}>
            <span><button>ADD person</button></span>
            <span ><button>ADD Order</button></span>
          </div>
          <form>
            <div>
                
            </div>
          </form>
             </React.Fragment>
      );
    return(
        <Modal onClose={props.onClose}>
            {cartModalContent}
        </Modal>
    )

  };
  export default AddCard
  