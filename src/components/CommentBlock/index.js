import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import { push } from "connected-react-router";
import { useForm } from "react-hook-form";
import { addPostComment } from "store/actions";

import "./style.scss";

function CommentBlock({ post }) {
  const dispatch = useDispatch();
  const { user, isFetchingComments } = useSelector(state => ({
    user: state.user,
    isFetchingComments: state.post.isFetchingComments,
  }));

  const navigateTo = path => () => dispatch(push(path));

// Form validation
const { register, handleSubmit, errors, setValue, triggerValidation } = useForm({
  defaultValues: {
    comment: "",
  }
});

  // Component did mount
  useEffect(() => {
    register({ name: "comment" }, { required: true });
  }, [register]);

  function getError(fieldName) {
    return !!errors[fieldName];
  };

  async function updateFormField(e, { name, value }) {
    setValue(name, value);
    await triggerValidation({ name });
  }

  function submitComment(data, e) {
    dispatch(addPostComment({
      postId: post.id, 
      author: user.profile.id,
      content: data.comment,
    }));

    e.target.reset();
  }

  const renderComment = comment => (
    <Segment key={comment.id}>
      <Header as="h4">
        <strong className="link static">@{comment.author.username}</strong> commented at <i className="comment-creation-date">{comment.creationDate}</i>
      </Header>
      <div>{comment.content}</div>
    </Segment>
  );

  return (
    <Segment className="comment-block">
      {
        user.isLoggedIn ?
        <Fragment>
          <Header>Comment as <span className="link static">@{user.profile.username}</span>:</Header>
          <Form onSubmit={handleSubmit(submitComment)} className="comment-form" loading={isFetchingComments}>
            <Form.TextArea name="comment" onChange={updateFormField} error={getError("comment")} />
            <Button color="red" floated="right">Comment</Button>
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