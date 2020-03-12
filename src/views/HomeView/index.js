import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPosts } from '../../store/actions';
import Spinner from "../../components/Spinner";
import PostCard from "../../components/PostCard";

function HomeView() {
  const { isFetching, posts } = useSelector(state => ({
    isFetching: state.posts.isFetching,
    posts: state.posts.items,
    errorMessage: state.posts.errorMessage,
  }));

  // Actions
  const dispatch = useDispatch();
  const addPostAction = () => dispatch(createPost({ id: Date.now(), title: "test post" }));

  // Component did mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const renderPostCard = post => (
    <Grid.Column key={post.id} stretched mobile={16} tablet={8} computer={4}>
      <PostCard post={post} />
    </Grid.Column>
  );

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <Grid>
      {posts.map(renderPostCard)}
      <Grid.Column>
        <button onClick={addPostAction}>+</button>
      </Grid.Column>
    </Grid>
  );
};

export default HomeView;