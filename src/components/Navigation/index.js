import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { useForm } from "react-hook-form";
import { Button, Menu, Container, Input, Dropdown, Icon, Form } from "semantic-ui-react";
import CategoryMenuItem from "components/CategoryMenuItem";
import { userLogout } from "store/actions";

import "./style.scss";

function Navigation() {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const { register, handleSubmit, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "searchTerm" }, { required: true });
  }, [register]);

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  const { user } = useSelector(state => ({
    user: state.user,
  }));

  function onLogoutClick() {
    dispatch(userLogout());
  }

  function onSearchSubmit(data, e) {
    if (data.searchTerm) {
      dispatch(push(`/search?searchTerm=${data.searchTerm}`));
    }

    e.target.reset();
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
          <Menu.Item className="header-search">
            <Form onSubmit={handleSubmit(onSearchSubmit)}>
              <Input
                name="searchTerm"
                icon="search"
                placeholder="Search..."
                onChange={updateFormField}
              />
            </Form>
          </Menu.Item>
          {
            user.isLoggedIn ?
            <Dropdown item text={`${user.profile.firstName} ${user.profile.lastName}`}>
              <Dropdown.Menu>
                <Dropdown.Item onClick={navigateTo("/dashboard")}><Icon name="dashboard" /> Dashboard</Dropdown.Item>
                <Dropdown.Item onClick={navigateTo("/dashboard/post")}><Icon name="plus" />Create Post</Dropdown.Item>
                <Dropdown.Item onClick={onLogoutClick}><Icon name="log out" /> Log out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> :
            <Menu.Item>
              <Button secondary className="header-register-btn" onClick={navigateTo("/register")} style={{ marginRight: 5 }}>Register</Button>
              <Button color="red" className="header-login-btn" onClick={navigateTo("/login")}>Log in</Button>
            </Menu.Item>
          }
        </Menu.Menu>
      </Container>
    </Menu>
  );
}

export default Navigation;