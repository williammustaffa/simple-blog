import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Grid, Header, Divider, Image, Icon } from "semantic-ui-react";
import Spinner from "../../components/Spinner";
import { fetchPost } from "../../store/actions";

import "./style.css";

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

  function deletePost() {
    
  }

  if (isFetching) {
    return <Spinner />
  }

  return (
    <Grid>
      <Grid.Column>
        {post.imageUrl && <Image src={post.imageUrl} centered />}
        <Header as="h1">
          {post.title}
        </Header>
        <div className="post-actions">
          <span className="action-link clickable" onClick={navigateTo(`/dashboard/post/${post.id}`)}>
            <Icon name="edit" />Edit
          </span>
          <span className="action-link clickable" onClick={deletePost}>
            <Icon name="delete" />Delete
          </span>
        </div>
        <Divider horizontal className="clearfix">
          <Header as="h4">Posted 25/05/12020 by <span className="link static">@{author.username}</span></Header>
        </Divider>
        <div className="content clearfix">
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
      </Grid.Column>
    </Grid>
  );
}

export default PostDetailsView;