import React from "react";
import Chart from "react-apexcharts";
import { Header } from "semantic-ui-react";

function MostLikedPostsChart({ posts }) {
  function sortPostsByEngagement(posts) {
    return posts.sort((postA, postB) => {
      const postAEngagement = postA.likes.length + postA.comments.length;
      const postBEngagement = postB.likes.length + postB.comments.length;

      if (postAEngagement > postBEngagement) return -1;
      if (postAEngagement < postBEngagement) return 1;

      return 0;
    })
  }

  const topPosts = sortPostsByEngagement(posts).slice(0, 5);
  const categories = topPosts.map(post => post.title);
  const likes = topPosts.map(post => post.likes.length);
  const comments = topPosts.map(post => post.comments.length);

  const options = {
    chart: { id: "basic-bar" },
    xaxis: { categories, labels: { show: false } },
    legends: {
      show: false,
    }
  };

  const series = [
    { name: "Likes", data: likes },
    { name: "Comments", data: comments },
  ];

  return (
    <div className="donut">
      <Header as="h3">Most engaged posts of all time:</Header>
      <Chart
        options={options}
        series={series}
        type="bar"
        width="500"
      />
    </div>
  );
}

export default MostLikedPostsChart;