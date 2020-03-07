import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, removePost } from '../../store/actions';
import { Icon, Label } from 'semantic-ui-react'

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
        posts.map(post => (
          <Label key={post.id} image>
            {post.title}
            <Icon name='delete' onClick={removePostAction(post)} />
          </Label>
        ))
      }
      <button onClick={addPostAction}>+</button>
    </div>
  );
};

export default Home;