import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Segment, Header, Form, Button } from "semantic-ui-react";

import "./style.scss";
import { push } from "connected-react-router";

function CommentBlock({ post }) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => ({
    user: state.user,
  }));

  const navigateTo = path => () => dispatch(push(path));

  const renderComment = comment => (
    <Segment>
      <Header as="h4">
        <strong className="link static">@{comment.author}</strong> <i>commented at</i>
        <Header.Subheader>{comment.creationDate}</Header.Subheader>
      </Header>
      <div>{comment.content}</div>
    </Segment>
  );

  function submitComment() {

  }

  return (
    <Segment className="comment-block">
      {
        user.isLoggedIn ?
        <Fragment>
          <Header>Comment as <span className="link static">@{user.profile.username}</span>:</Header>
          <Form className="comment-form">
            <Form.TextArea />
            <Button color="red" floated="right" onClick={submitComment}>Comment</Button>
          </Form>
        </Fragment> :
        <Header textAlign="center" className="guest-comment-block">
          <span className="link clickable" onClick={navigateTo(`/login?redirect=${window.location.pathname}`)}>Log in</span>
          {" "}or{" "}
          <span className="link clickable" onClick={navigateTo(`/register?redirect=${window.location.pathname}`)}>Register</span> to comment!
        </Header>
      }
      <Header>{post.comments.length} comments:</Header>
      {post.comments.map(renderComment)}
    </Segment>
  )
}

export default CommentBlock;