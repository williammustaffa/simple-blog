import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';

function NotFoundPage () {
  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column>
          <Segment textAlign="center">
            <Header>
              It seems you got lost.
              <Header.Subheader>This page doesn't exist...</Header.Subheader>
            </Header>
            <Link to="/">
              <Button secondary>Go to homepage</Button>
            </Link>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default NotFoundPage;