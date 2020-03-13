import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Grid, Header, Divider, Image, Icon, Label, Button } from "semantic-ui-react";
import Spinner from "components/Spinner";
import { fetchPost } from "store/actions";

import "./style.scss";

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

  const renderCategoryLabel = (category) => (
    <Label key={category.id} color={category.labelColor}>
      {category.displayName}
    </Label>
  );

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
        <div className="post-line">
          <div className="post-categories">
            {post.categories.map(renderCategoryLabel)}
          </div>
          <div className="post-actions">
            <span className="action-link link clickable" onClick={navigateTo(`/dashboard/post/${post.id}`)}>
              <Icon name="edit" />Edit
            </span>
            <span className="action-link link clickable" onClick={deletePost}>
              <Icon name="delete" />Delete
            </span>
          </div>
        </div>
        <Divider horizontal className="clearfix">
          <Header as="h4">Posted 25/05/12020 by <span className="link static">@{author.username}</span></Header>
        </Divider>
        <div className="content clearfix">
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
        <Divider />
        <Button as="div" size="tiny" labelPosition="right">
          <Button>
            <Icon name="heart" />
            Like
          </Button>
          <Label as="a" basic pointing="left">
            2,048
          </Label>
        </Button>
      </Grid.Column>
    </Grid>
  );
}

export default PostDetailsView;