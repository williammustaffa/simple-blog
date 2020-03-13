import React from "react";
import { Grid, Segment, Container, } from "semantic-ui-react";

import "./style.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Segment inverted vertical className="custom-footer">
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column textAlign="center">
              Simple Blog © {year}
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;