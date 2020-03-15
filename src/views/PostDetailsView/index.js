import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { Grid, Header, Divider, Image, Icon, Label, Button, Popup } from "semantic-ui-react";
import Spinner from "components/Spinner";
import { fetchPost, deletePost, togglePostLike } from "store/actions";
import CommentBlock from "components/CommentBlock";
import ConfirmationModal from "components/ConfirmationModal";

import "./style.scss";

function PostDetailsView(props) {
  const { id } = props.match.params;

  const { isFetching, post, isLoggedIn, user } = useSelector(state => ({
    isLoggedIn: state.user.isLoggedIn,
    isFetching: state.post.isFetching,
    post: state.post.item,
    user: state.user,
  }));


  const dispatch = useDispatch();
  const navigateTo = path => () => dispatch(push(path));

  // Component did mount
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  // Actions
  function onDeletePost() {
    dispatch(deletePost(post.id));
  }

  function onPostLikeClick() {
    if (!isLoggedIn) return;

    dispatch(togglePostLike({
      profileId: user.profile.id,
      postId: post.id,
    }));
  }

  // Deletion modal
  const [showDeleteModal, setShowDeleteModal] = useState();

  function openDeleteModal() {
    setShowDeleteModal(true);
  }

  function closeDeleteModal() {
    setShowDeleteModal(false);
  }

  function onConfirmDeleteModal() {
    onDeletePost();
    closeDeleteModal();
  }

  function onImageFailure(event) {
    event.target.style.display = "none";
  }

  function onImageLoad(event) {
    event.target.style.display = "block";
  }

  const renderCategoryLabel = (category) => (
    <Label key={category.id} color={category.labelColor}>
      {category.displayName}
    </Label>
  );

  const isPostLiked = post.likes.includes(user.profile.id);

  const likeButton = (
    <Button as="div" size="tiny" labelPosition="right">
      <Button onClick={onPostLikeClick} color={isPostLiked ? "red" : null }><Icon name="heart" />{isPostLiked ? "Liked" : "Like"}</Button>
      <Label as="a" basic pointing="left" color={isPostLiked ? "red" : null }>{post.likes.length}</Label>
    </Button>
  );

  if (isFetching) {
    return <Spinner />
  }

  return (
    <Grid>
      <Grid.Column>
        {
          post.imageUrl &&
          <Image
            centered
            className="post-banner-image"
            src={post.imageUrl}
            onLoad={onImageLoad}
            onError={onImageFailure}
          />
        }
        <Header as="h1">
          {post.title}
        </Header>
        <div className="post-line">
          <div className="post-categories">
            {post.categories.map(renderCategoryLabel)}
          </div>
          <div className="post-actions">
            {
              post.roles.includes("write") &&
              <span className="action-link link clickable" onClick={navigateTo(`/dashboard/post/${post.id}`)}>
                <Icon name="edit" />Edit
              </span>
            }
            {
              post.roles.includes("delete") &&
              <span className="action-link link clickable" onClick={openDeleteModal}>
                <Icon name="delete" />Delete
              </span>
            }
          </div>
        </div>
        <Divider horizontal className="clearfix">
          <Header as="h4">Posted {post.creationDate} by <span className="link static">@{post.author.username}</span></Header>
        </Divider>
        <div className="post-content clearfix">
          <p dangerouslySetInnerHTML={{ __html: post.content }}></p>
        </div>
        {
          isLoggedIn ?
          likeButton :
          <Popup trigger={likeButton} content="Login or Register to like this post!" inverted />
        }
        <CommentBlock post={post} />
      </Grid.Column>
      <ConfirmationModal
        open={showDeleteModal}
        title="Delete Post"
        text="Are you sure you want to delete this post?"
        onConfirm={onConfirmDeleteModal}
        onClose={closeDeleteModal}
      />
    </Grid>
  );
}

export default PostDetailsView;