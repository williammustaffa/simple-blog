import React from "react";
import { Grid, Segment, Container, Image } from "semantic-ui-react";
import logoInverted from "../../assets/images/logo-inverted.svg";

import "./style.css";

function Footer() {
  return (
    <Segment inverted vertical className="custom-footer">
      <Container>
        <Grid centered>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={3}>
              <Image src={logoInverted} alt="inverted logo" />
            </Grid.Column>
          </Grid.Row>
          </Grid>
      </Container>
    </Segment>
  );
}

export default Footer;