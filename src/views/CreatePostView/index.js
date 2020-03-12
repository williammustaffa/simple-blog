import React, { useEffect } from "react";
import { Grid, Form, Header } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import TextEditor from "../../components/TextEditor";

import "./style.css";

function CreatePostView() {
  const { register, handleSubmit, errors, setValue, triggerValidation } = useForm();

  useEffect(() => {
    register({ name: "title" }, { required: true });
    register({ name: "content" }, { required: true });
  }, [register]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  function onSubmit(data) {
    console.log('Create post', data);
  }

  async function updateFormField(e, { name, value }) {
    console.log("PRAIA xd", name, value)
    setValue(name, value);
    await triggerValidation({ name });
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>Create post</Header>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Input
              fluid
              name="title"
              onChange={updateFormField}
              error={getError("title")}
              label="Title"
            />
           <Form.Input
              fluid
              name="image"
              onChange={updateFormField}
              label="Image URL (optional)"
            />
            <TextEditor
              name="content"
              onChange={updateFormField}
              label="Post Content"
            />
            <Form.Button fluid color="red" style={{ marginTop: "2em" }}>Create and publish</Form.Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreatePostView;