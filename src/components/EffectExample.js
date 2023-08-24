import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const UseEffectExample = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello from use effect");
  }, [count]);

  useEffect(() => {
    console.log("run every condition is changed");
    return () => {
      console.log(
        "Use this return as a clean up tool (this runs before the actual code)"
      );
    };
  }, [count]);
  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <label>Count is {count}</label>
    </div>
  );
};
export default UseEffectExample;
