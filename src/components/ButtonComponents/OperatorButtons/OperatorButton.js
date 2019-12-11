import React from "react";
import Operators from "../OperatorButtons/Operators";
const OperatorButton = props => {
  return (
    <button>
      {
        // <button onClick={() => props.setOperatorsState(props)}></button>
        /* Display a button element rendering the data being passed down from the parent container on props */
      }
      {props.char.values}
    </button>
  );
};

export default OperatorButton;
