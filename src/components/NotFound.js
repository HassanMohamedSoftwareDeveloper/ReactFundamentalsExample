import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = (props) => {
  console.log(props);
  return (
    <div>
      <Alert variant={props.Color}>{props.Message}</Alert>
    </div>
  );
};

export default NotFound;
