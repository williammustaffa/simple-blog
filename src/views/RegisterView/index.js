import React, { useEffect } from "react";
import { Grid, Form, Header } from "semantic-ui-react";
import { useForm } from "react-hook-form";

import "./style.scss";
import createProfile from "store/actions/profiles/createProfile";

function RegisterView() {
  const { register, handleSubmit, errors, setValue, triggerValidation, watch } = useForm();

  useEffect(() => {
    function validatePassword(value) {
      return value && /^\S+$/.test(value) && value.length >= 5;
    }
  
    function validateConfirmPassword(value) {
      return value && value === watch("password");
    }

    register({ name: "firstName" }, { required: true });
    register({ name: "lastName" }, { required: true });
    register({ name: "email" }, { required: true, pattern: /^[^\s@]+@[^\s@]+\..*/ });
    register({ name: "username" }, { required: true, pattern: /^\S+$/ });
    register({ name: "password" }, { required: true, validate: validatePassword });
    register({ name: "confirmPassword" }, { required: true, validate: validateConfirmPassword });
  }, [register, watch]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function onSubmit(data) {
    dispatchEvent(createProfile(data));
  }

  return (
    <Grid centered>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>
            Register to Simple Blog
            <Header.Subheader>Be an author!</Header.Subheader>
          </Header>
          <Form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "2em" }}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="firstName"
                onChange={updateFormField}
                error={getError("firstName")}
                label="First name"
              />
              <Form.Input
                fluid
                name="lastName"
                onChange={updateFormField}
                error={getError("lastName")}
                label="Last name"
              />
            </Form.Group>
            <Form.Input
              fluid
              name="username"
              onChange={updateFormField}
              error={getError("username")}
              icon="at"
              iconPosition="left"
              label="Username"
            />
            <Form.Input
              fluid
              name="email"
              onChange={updateFormField}
              error={getError("email")}
              label="E-mail"
            />
            <Form.TextArea
              name="description"
              onChange={updateFormField}
              error={getError("description")}
              label="About"
              placeholder="Tell us more about you..."
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                name="password"
                onChange={updateFormField}
                error={getError("password")}
                type="password"
                label="Password"
              />
              <Form.Input
                fluid
                name="confirmPassword"
                onChange={updateFormField}
                error={getError("confirmPassword")}
                type="password"
                label="Confirm password"
              />
            </Form.Group>
            <Form.Button fluid style={{ marginTop: "2em" }}>Register</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default RegisterView;