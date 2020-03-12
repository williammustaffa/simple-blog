import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Button, Menu, Container, Input } from "semantic-ui-react";
import CategoriesItem from "./CategoriesItem";

function Navigation() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  return (
    <Menu inverted style={{ borderRadius: 0 }}>
      <Container>
        <Menu.Item
          name="homes"
          onClick={navigateTo("/")}
        />
        <Menu.Item
          name='dashboard'
          onClick={navigateTo("/dashboard")}
        />
        <CategoriesItem />

        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item>
            <Button secondary onClick={navigateTo("/register")} style={{ marginRight: 5 }}>Register</Button>
            <Button color="red" onClick={navigateTo("/login")}>Log in</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navigation;