import React from "react";
// import { tsPropertySignature } from "@babel/types";
// import Specials from "../SpecialButtons/Specials";

const SpecialButton = props => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      {props.button}
    </button>
  );
};

export default SpecialButton;
