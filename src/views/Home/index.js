import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, removePost } from '../../store/actions';

const Home = () => {
  const { posts } = useSelector(state => ({
    posts: state.posts,
  }));

  // Actions
  const dispatch = useDispatch();
  const addPostAction = () => dispatch(addPost({ id: Date.now(), title: "test post" }));
  const removePostAction = postId => () => dispatch(removePost(postId));

  return (
    <div>
      {
        posts.map(post => (<div key={post.id}>{post.title} <button onClick={removePostAction(post)}>-</button></div>))
      }
      <button onClick={addPostAction}>+</button>
    </div>
  );
};

export default Home;