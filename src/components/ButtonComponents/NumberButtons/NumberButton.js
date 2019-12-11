import React from "react";
// import { tsPropertySignature } from "@babel/types";
// import Numbers from "../NumberButtons/Numbers";

const NumberButton = props => {
  return (
    <button onClick={() => console.log(props.text)}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      {props.text}
    </button>
  );
};

export default NumberButton;
