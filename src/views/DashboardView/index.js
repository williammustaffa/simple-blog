import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Header, Grid } from "semantic-ui-react";
import { fetchPosts } from "store/actions";
import Spinner from "components/Spinner";
import CategoriesVSPostsChart from "./CategoriesVSPostsChart";
import MostEngagedPostsChart from "./MostEngagedPostsChart";

import "./style.scss";

function DashboardView() {
  const { profile, isFetching, posts, categories } = useSelector(state => ({
    profile: state.user.profile,
    posts: state.posts.items,
    categories: state.categories.items,
    isFetching: state.posts.isFetching,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (isFetching) {
    return <Spinner />;
  }

  return (
    <div>
      <Header as="h1">Welcome, {profile.firstName}!</Header>
      <Grid columns={2}>
        <Grid.Column>
          <CategoriesVSPostsChart posts={posts} categories={categories} />
        </Grid.Column>
        <Grid.Column>
          <MostEngagedPostsChart posts={posts} />
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default DashboardView;