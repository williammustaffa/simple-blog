import React from 'react';
import PropTypes from 'prop-types';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { Card, Label, Icon } from 'semantic-ui-react'
import { deletePost } from '../store/actions';

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const deletePostAction = () => dispatch(deletePost(post));
  const navigateTo = path => () => dispatch(push(path));

  const removePostIcon = (
    <Label key={post.id} image>
      Delete Post
      <Icon name='delete' onClick={() => deletePostAction(post)} />
    </Label>
  );

  const postUrl = `/post/${post.id}/${post.title}`
    .replace(/\s/gi, "-");

  return (
    <Card
      fluid
      image={`https://picsum.photos/200?t=${Date.now()}`}
      header={post.title}
      meta='by @williammustaffa'
      description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      extra={removePostIcon}
      onClick={navigateTo(postUrl)}
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