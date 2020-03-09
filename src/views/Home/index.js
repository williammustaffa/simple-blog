import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, fetchPosts } from '../../store/actions';
import PostCard from "../../components/PostCard";

const Home = () => {
  const { posts } = useSelector(state => ({
    posts: state.posts,
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

  return (
    <Grid>
      {posts.map(renderPostCard)}
      <Grid.Column>
        <button onClick={addPostAction}>+</button>
      </Grid.Column>
    </Grid>
  );
};

export default Home;