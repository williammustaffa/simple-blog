import React from 'react';
import PropTypes from 'prop-types';
import HTMLEllipsis from 'react-lines-ellipsis/lib/html'
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { Card, Label } from 'semantic-ui-react'

function PostCard({ post }) {
  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  const postUrl = `/post/${post.id}/${post.title}`
    .replace(/\s/gi, "-");

  const renderCategoryLabel = (category) => (
    <Label color={category.labelColor} size="tiny">{category.displayName}</Label>
  );

  return (
    <Card fluid>
      <div className="card-image" style={{ backgroundImage: `url(${post.imageUrl})` }}></div>
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
      <Card.Content extra>
        {post.categories.map(renderCategoryLabel)}
      </Card.Content>
    </Card>
  );
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostCard;