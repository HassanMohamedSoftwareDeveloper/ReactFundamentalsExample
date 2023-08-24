import { useState } from "react";
import { Button } from "react-bootstrap";
const StateExample = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <Button variant="success" onClick={handleIncrement}>
        +
      </Button>
      <Button variant="info" onClick={handleDecrement}>
        -
      </Button>
      <label> count is : {count}</label>
    </div>
  );
};
export default StateExample;
