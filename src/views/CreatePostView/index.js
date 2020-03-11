import React, { useEffect } from "react";
import { Grid, Form, Header } from "semantic-ui-react";
import { useForm } from 'react-hook-form';

function CreatePostView() {
  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "title" }, { required: true });
    register({ name: "content" }, { required: true });
  }, [register]);

  const getError = fieldName => {
    return !!errors[fieldName];
  };

  const onSubmit = data => {
    console.log('Create post', data);
  }

  const updateFormField = async (e, { name, value }) => {
    setValue(name, value);
    await triggerValidation({ name });
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>Edit post</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
              fluid
              name="title"
              onChange={updateFormField}
              error={getError('title')}
              label='Title'
            />
            <Form.TextArea
              fluid
              name="content"
              onChange={updateFormField}
              error={getError('content')}
              label="Post content:"
            />
            <Form.Button fluid color="red" style={{ marginTop: "2em" }}>Create and publish</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreatePostView;