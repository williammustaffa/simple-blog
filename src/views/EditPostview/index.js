import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Header } from "semantic-ui-react";
import { fetchPost } from "../../store/actions";

import "./style.scss";
import Spinner from "../../components/Spinner";
import PostForm from "../../components/PostForm";

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
    dispatch(fetchPost(id));
  }, [id]);

  function onSubmit(data) {
    console.log('Dispatch post update:', data);
  }

  if (isFetching) {
    return <Spinner />
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={10} computer={10}>
          <Header as="h1" textAlign="center" className="page-title">Edit post</Header>
          <PostForm post={post} onSubmit={onSubmit} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default EditPostView;