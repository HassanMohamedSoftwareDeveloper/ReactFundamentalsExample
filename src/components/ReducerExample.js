import React, { useState,useReducer } from "react";
import { Button } from "react-bootstrap";

const initialValue = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return { state };
  }
};

const ReducerExample = () => {
  const [value, setValue] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div>
      value is : {state.count}
      <Button onClick={() => dispatch({type:"increment"})}>+</Button>
      <Button onClick={() => dispatch({type:"decrement"})}>-</Button>
      <Button onClick={() => dispatch({type:"reset"})}>Reset</Button>
    </div>
  );
};

export default ReducerExample;
