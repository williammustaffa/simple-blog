import React from "react";
import { Grid, Image } from "semantic-ui-react";
import Navigation from "../Navigation";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <Grid centered style={{ marginBottom: '4em' }}>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Image src={logo} fluid />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Navigation />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default Header;