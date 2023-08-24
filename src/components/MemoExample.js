import React, { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

const MemoExample = () => {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(0);

  const result = useMemo(() => {
    return (
      <div style={{ color: randomColor }}>
        Value is {counter} :={counter * 2}
      </div>
    );
  }, [counter]);

  return (
    <div>
    {result}
      <Button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </Button>
      <Button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </Button>
      <Button
        onClick={() => {
          setTest(test + 1);
        }}
      >
        Test
      </Button>
    </div>
  );
};

export default MemoExample;
