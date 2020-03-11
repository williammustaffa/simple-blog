import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Grid, Loader, Header, Divider, Image } from "semantic-ui-react";
import { fetchPost } from "../../store/actions";

function PostDetailsView(props) {
  const { id } = props.match.params;

  const { isFetching, post } = useSelector(state => ({
    isFetching: state.post.isFetching,
    post: state.post.item,
    errorMessage: state.post.errorMessage,
  }));

  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  // Component did mount
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const { author } = post;

  if (isFetching) {
    return (
      <Loader active inline='centered' style={{ margin: '10em auto' }} />
    );
  }

  return (
    <Grid>
      <Grid.Column>
          <Image src='https://picsum.photos/1200/200?t=${Date.now()}' fluid />
          <Header as="h1">{post.title}</Header>
          <Divider horizontal textAlign="left">
            <Header as="h4">
              Posted 25/05/12020 by <a href="#" onClick={navigateTo(`/author/${author.username}`)}>@{author.username}</a>
            </Header>
          </Divider>
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
      </Grid.Column>
    </Grid>
  );
}

export default PostDetailsView;