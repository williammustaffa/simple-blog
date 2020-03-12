import React from "react";
import { Loader } from "semantic-ui-react";

import "./style.scss";

function Spinner() {
  return (
    <Loader active className="custom-spinner" />
  );
}

export default Spinner