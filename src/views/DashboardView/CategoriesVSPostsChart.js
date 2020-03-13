import React from "react";
import Chart from "react-apexcharts";
import { Header } from "semantic-ui-react";

function CategoriesVSPostsChart({ posts, categories }) {
  const topCategories = categories.map(category => {
    category.postsCount = posts.filter(post => {
      return post.categories.find(cat => cat.id === category.id);
    }).length;

    return category;
  }).sort((catA, catB) => {
    if (catA.postsCount > catB.postsCount) return -1;
    if (catA.postsCount < catB.postsCount) return 1;
    return 0;
  });

  const series = topCategories.map(category => category.postsCount);
  const labels = topCategories.map(category => category.displayName);

  const options = {
    labels,
    legend: {
      display: true,
      responsive: true
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex]
      },
    },
  };

  return (
    <div className="donut-chart">
      <Header as="h3">Categories vs Posts:</Header>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="380"
      />
    </div>
  );
}

export default CategoriesVSPostsChart;