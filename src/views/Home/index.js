import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost, removePost } from '../../store/actions';

const Home = (props) => (
  <div>
    <button onClick={props.add}>+</button>
    <button onClick={props.remove}>-</button>
  </div>
);

Home.propTypes = {
  posts: PropTypes.object,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  posts: state.posts,
});

const mapDispatchToProps = dispatch => ({
  add: () => dispatch(addPost()),
  remove: () => dispatch(removePost()),
});

export default Home; //connect(mapStateToProps, mapDispatchToProps)(Home);