import React from "react";
import { Loader } from "semantic-ui-react";

import "./style.css";

function Spinner() {
  return (
    <Loader active inline="centered" className="custom-spinner" />
  );
}

export default Spinner