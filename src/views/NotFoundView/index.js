import React from "react";
import { push } from "connected-react-router";
import { Header, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";

import "./style.scss";

function NotFoundView() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  return (
    <div className="not-found-page">
      <Header as="h1">404</Header>
      <p><strong>Oops! Nothing to see here.</strong></p>
      <Button secondary onClick={navigateTo("/")}>Go to homepage</Button>
    </div>
  );
}

export default NotFoundView;