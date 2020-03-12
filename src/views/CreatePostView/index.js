import React from "react";
import { Grid, Header } from "semantic-ui-react";
import PostForm from "../../components/PostForm";
import "./style.scss";

function CreatePostView() {
  function onSubmit(data) {
    console.log('Create post', data);
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <Header as="h1" textAlign="center" className="page-title">Create post</Header>
          <PostForm onSubmit={onSubmit} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreatePostView;