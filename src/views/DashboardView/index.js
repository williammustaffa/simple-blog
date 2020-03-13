import React from "react";
import { useSelector } from "react-redux";
import { Header } from "semantic-ui-react";
import MostCommentedPostsChart from "./MostCommentedPostsChart";

function DashboardView() {
  const { profile } = useSelector(state => ({
    profile: state.user.profile,
  }));

  return (
    <div>
      <Header as="h1">Welcome, {profile.firstName}!</Header>
      <MostCommentedPostsChart />

    </div>
  );
};

export default DashboardView;