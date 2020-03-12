import React from 'react';
import PropTypes from 'prop-types';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { Card, Image } from 'semantic-ui-react'

function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const postUrl = `/post/${post.id}/${post.title}`
    .replace(/\s/gi, "-");

  return (
    <Card fluid>
      <Image src={post.imageUrl} />
      <Card.Content>
        <Card.Header onClick={navigateTo(postUrl)}>
          <span className="clickable" >{post.title}</span>
        </Card.Header>
        <Card.Meta>Posted by <span className="link static">@{post.author.username}</span></Card.Meta>
        <Card.Description>
          <HTMLEllipsis
            unsafeHTML={post.content}
            maxLine="3"
            ellipsis="..."
            basedOn="letters"
          />
        </Card.Description>
      </Card.Content>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
  })
};

export default PostCard;