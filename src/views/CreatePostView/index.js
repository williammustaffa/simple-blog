import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import PostForm from "components/PostForm";
import { createPost } from "store/actions";
import Spinner from "components/Spinner";

import "./style.scss";

function CreatePostView() {
  const dispatch = useDispatch();

  const { user, isFetching } = useSelector(state => ({
    isFetching: state.posts.isFetching,
    user: state.user,
  }));

  function onSubmit(data) {
    dispatch(createPost({
      ...data,
      author: user.profile.id
    }));
  }

  if (isFetching) {
    return <Spinner />;
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