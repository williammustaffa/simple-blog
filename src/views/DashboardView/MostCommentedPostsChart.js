import React from "react";
import Chart from "react-apexcharts";
import { Header } from "semantic-ui-react";

function MostCommentedPostsChart() {
  const series = [44, 55, 41, 17, 15];
  const labels = ['Some post title', 'this should be.', 'smol title', 'title', 'ti'];
  const options = { labels };

  return (
    <div className="donut">
      <Header as="h3">Most commented posts of all time:</Header>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default MostCommentedPostsChart;