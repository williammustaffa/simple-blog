import React from "react";
import { push } from "connected-react-router";
import { Grid, Header, Button, Segment } from "semantic-ui-react";
import { useDispatch } from "react-redux";

function NotFoundPage () {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Segment textAlign="center">
            <Header>
              It seems you got lost.
              <Header.Subheader>This page doesn't exist...</Header.Subheader>
            </Header>
            <Button secondary onClick={navigateTo('/')}>Go to homepage</Button>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default NotFoundPage;