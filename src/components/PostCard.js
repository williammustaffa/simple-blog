import React from 'react';
import PropTypes from 'prop-types';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { Card, Label, Header } from 'semantic-ui-react'

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const categoryLabel = (
    <Label key={post.id} color="yellow">
      category
    </Label>
  );

  const postUrl = `/post/${post.id}/${post.title}`
    .replace(/\s/gi, "-");
  
  const postTitle = (
    <Header as="h3" onClick={navigateTo(postUrl)}><a href="#">{post.title}</a></Header>
  );

  const postMeta = (
    <span>Posted by <a href="#">{post.author.username}</a></span>
  );

  const postDescription = (
    <HTMLEllipsis
      unsafeHTML={post.content}
      maxLine="3"
      ellipsis="..."
      basedOn="letters"
    />
  );

  return (
    <Card
      fluid
      image={post.imageUrl}
      header={postTitle}
      meta={postMeta}
      description={postDescription}
      extra={categoryLabel}
    />
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  })
};

export default PostCard;