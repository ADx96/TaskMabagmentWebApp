import React, { useState } from "react";
import { Chart } from "primereact/chart";

let basicOptions = {
  maintainAspectRatio: false,
  aspectRatio: 1,
  plugins: {},
  scales: {
    y: {
      display: false,
    },
  },
};

const TeamProgressChart = () => {
  const [lineStylesData] = useState({
    labels: ["Sun", "Mon", "Tue", "Wed", "Thur"],
    datasets: [
      {
        label: "Third Dataset",
        data: [12, 51, 62, 33, 21, 62, 45],
        fill: true,
        borderColor: "#FFA726",
        tension: 0.4,
        backgroundColor: "rgba(255,167,38,0.2)",
      },
    ],
  });

  return (
    <div className="card">
      <Chart type="line" data={lineStylesData} options={basicOptions} />
    </div>
  );
};

export default TeamProgressChart;
