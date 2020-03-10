import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Grid, Segment, Header, Divider, Image } from "semantic-ui-react";
import { fetchPost } from "../../store/actions";

function PostDetails (props) {
  const { id } = props.match.params;

  const { post } = useSelector(state => ({
    post: state.post,
  }));

  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  // Component did mount
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  const { author } = post;
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <Image src='https://picsum.photos/1200/200?t=${Date.now()}' fluid />
            <Header as="h1">{post.title}</Header>
            <Divider horizontal textAlign="left">
              <Header as="h4">
                Posted 25/05/12020 by
                {author.username && <a href="#" onClick={navigateTo(`/author/${post.author.username}`)}>@{post.author.username}</a>}
              </Header>
            </Divider>
            <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default PostDetails;