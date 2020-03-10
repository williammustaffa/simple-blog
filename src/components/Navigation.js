import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Button, Menu } from "semantic-ui-react";

const Navigation = () => {
  const dispatch = useDispatch();

  const navigateTo = path => () => dispatch(push(path));

  return (
    <Menu>
      <Menu.Item
        name="home"
        onClick={navigateTo("/")}
      />
      <Menu.Item
        name='dashboard'
        onClick={navigateTo("/dashboard")}
      />

      <Menu.Menu position='right'>
        <Menu.Item>
          <Button.Group>
            <Button onClick={navigateTo("/register")}>Register</Button>
            <Button.Or />
            <Button color="red">Login</Button>
          </Button.Group>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Navigation;