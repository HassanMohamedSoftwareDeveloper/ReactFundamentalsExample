import { useEffect, useState, useRef } from "react";
import { Button } from "react-bootstrap";

const RefExample = () => {
  const value = useRef(null);
  console.log(value);
  return (
    <div>
      <input type="text" ref={value} />
      <Button onClick={() => {
        value.current.focus();
        console.log(value.current.value)
      }}>Print</Button>
    </div>
  );
};
export default RefExample;
