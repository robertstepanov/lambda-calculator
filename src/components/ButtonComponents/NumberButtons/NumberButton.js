import React from "react";
// import { tsPropertySignature } from "@babel/types";
// import Numbers from "../NumberButtons/Numbers";

const NumberButton = props => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      {/*displays a 7 in button*/}
      {/* <div>7</div> */}

      {props.button}
    </button>
  );
};

export default NumberButton;
