import React, { useEffect } from "react";
import { Grid, Header, Icon, Divider } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "store/actions";
import Spinner from "components/Spinner";
import PostCard from "components/PostCard";
import qs from "qs";

import "./style.scss";

function SearchResultsView(props) {
  const params = qs.parse(props.location.search, { ignoreQueryPrefix: true });
  const category = (params && params.category) || false;;
  const searchTerm = (params && params.searchTerm) || false;

  const { isFetching, posts, categories } = useSelector(state => ({
    isFetching: state.posts.isFetching,
    posts: state.posts.items,
    categories: state.categories.items,
    errorMessage: state.posts.errorMessage,
  }));

  // Actions
  const dispatch = useDispatch();

  // Component did mount
  useEffect(() => {
    dispatch(fetchPosts({
      category,
      searchTerm,
    }));
  }, [dispatch, category, searchTerm]);

  const renderPostCard = post => (
    <Grid.Column key={post.id} stretched mobile={16} tablet={8} computer={4}>
      <PostCard post={post} />
    </Grid.Column>
  );

  if (isFetching) {
    return <Spinner />;
  }

  const currentCategory = categories.find(cat => cat.id === category);

  return (
    <div className="search-results">
      {
        currentCategory &&
        <Header as="h1">
          Category: <span className="link static">{currentCategory.displayName}</span>
          <Header.Subheader>{posts.length} results</Header.Subheader>
        </Header>
      }
      {
        searchTerm &&
        <Header as="h1">
          Results for search term: <span className="link static">{searchTerm}</span>
          <Header.Subheader>{posts.length} results</Header.Subheader>
        </Header>
      }
      <Divider />
      {
        posts.length ?
        <Grid>
          {posts.map(renderPostCard)}
        </Grid> :
        <Header className="no-results" textAlign="center" icon>
          <Icon name="search" />
          We don't have any results matching your query.
        </Header>
      }
    </div>
  );
};

export default SearchResultsView;