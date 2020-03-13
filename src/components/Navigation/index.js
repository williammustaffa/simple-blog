import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { Button, Menu, Container, Input, Dropdown } from "semantic-ui-react";
import CategoryMenuItem from "components/CategoryMenuItem";
import { userLogout } from "store/actions";

import "./style.scss";

function Navigation() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { user } = useSelector(state => ({
    user: state.user,
  }));

  function onLogoutClick() {
    dispatch(userLogout());
  }

  return (
    <Menu inverted className="header-navigation">
      <Container>
        <Menu.Item
          name="homes"
          onClick={navigateTo("/")}
        />
        <CategoryMenuItem />


        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
          {
            user.isLoggedIn ?
            <Dropdown item text={`${user.profile.firstName} ${user.profile.lastName}`}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={navigateTo("/dashboard")}>Dashboard</Dropdown.Item>
                <Dropdown.Item onClick={onLogoutClick}>Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
            <Menu.Item>
              <Button secondary onClick={navigateTo("/register")} style={{ marginRight: 5 }}>Register</Button>
              <Button color="red" onClick={navigateTo("/login")}>Log in</Button>
            </Menu.Item>
          }
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navigation;