import React, { useEffect } from "react";
import { Grid, Form, Header } from "semantic-ui-react";
import { useForm } from 'react-hook-form';

import "./style.scss";

function LoginView() {
  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "email" }, { required: true });
    register({ name: "password" }, { required: true });
  }, [register]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function onSubmit(data) {
    console.log('Login Author', data);
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={4}>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>Log in to Simple Blog</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
              fluid
              name="email"
              onChange={updateFormField}
              error={getError('email')}
              label='E-mail'
            />
            <Form.Input
              fluid
              type="password"
              name="password"
              onChange={updateFormField}
              error={getError('password')}
              label='Password'
            />
            <Form.Button fluid color="red" style={{ marginTop: "2em" }}>Log in</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default LoginView;