import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { fetchPost } from "store/actions";
import PostForm from "components/PostForm";
import Spinner from "components/Spinner";
import { updatePost } from "store/actions";

import "./style.scss";

function EditPostView(props) {
  const { id } = props.match.params;

  const { isFetching, post } = useSelector(state => ({
    isFetching: state.post.isFetching,
    post: state.post.item,
    errorMessage: state.post.errorMessage,
  }));

  const dispatch = useDispatch();

  // Component did mount
  useEffect(() => {
    // Request post data
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  function onSubmit(data) {
    dispatch(updatePost(data));
  }

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <Header as="h1" textAlign="center" style={{ marginBottom: "2em" }}>Edit post</Header>
          <PostForm post={post} onSubmit={onSubmit} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EditPostView;