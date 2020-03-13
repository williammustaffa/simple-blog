import React, { useEffect } from "react";
import { Grid, Form, Header, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { userLogin } from "store/actions";
import qs from "qs";

import "./style.scss";

function LoginView(props) {
  const params = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  const redirectUrl = (params && params.redirect) || "/";

  const dispatch = useDispatch();

  const { isFetching, errorMessage } = useSelector(state => ({
    isFetching: state.user.isFetching,
    isLoggedIn: state.user.isLoggedIn,
    errorMessage: state.user.errorMessage,
  }));

  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm();

  useEffect(() => {
    function validatePassword(value) {
      return value && /^\S+$/.test(value) && value.length >= 5;
    }

    register({ name: "email" }, { required: true, pattern: /^[^\s@]+@[^\s@]+\..*/ });
    register({ name: "password" }, { required: true, validate: validatePassword });
  }, [register]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function onSubmit({ email, password }) {
    dispatch(userLogin({ email, password, redirectUrl }));
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>Log in to Simple Blog</Header>
          <Form onSubmit={handleSubmit(onSubmit)} loading={isFetching}>
            <Form.Input
              fluid
              name="email"
              onChange={updateFormField}
              error={getError("email")}
              label="E-mail"
            />
            <Form.Input
              fluid
              type="password"
              name="password"
              onChange={updateFormField}
              error={getError("password")}
              label="Password"
            />
            {errorMessage && <Message negative>
              <Message.Header>Login failed</Message.Header>
              <p>{errorMessage}</p>
            </Message>}
            <Form.Button fluid color="red" style={{ marginTop: "2em" }}>Log in</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default LoginView;