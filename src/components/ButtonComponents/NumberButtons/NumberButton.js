import React from "react";
import { tsPropertySignature } from "@babel/types";
import Numbers from "../NumberButtons/Numbers";

const NumberButton = props => {
  return (
    <>
      {
        <div>
          <button>
            {/* onClick={() => props.setNumbersState(props)} */}
            <span>{props.numberState}</span>>
          </button>
        </div>
        /* Display a button element rendering the data being passed down from the parent container on props */
      }
    </>
  );
};

export default NumberButton;
