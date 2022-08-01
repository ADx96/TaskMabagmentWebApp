import React, { useState } from "react";
import { Chart } from "primereact/chart";
import { Dropdown } from "primereact/dropdown";
import "../../Styles/DropDowns.css";

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
  const [selectedCountry, setSelectedCountry] = useState("Last 7 Days");

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

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  };

  const countries = [
    { name: "Last 7 Days" },
    { name: "Last 8 Days" },
    { name: "Last 9 Days" },
  ];

  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <i className="pi pi-calendar"></i>
          <div style={{ paddingLeft: "1px" }}>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <i className="pi pi-calendar"></i>
        <div style={{ paddingLeft: "1px" }}>{option.name}</div>
      </div>
    );
  };

  return (
    <div
      className="surface-card shadow-2 border-round "
      style={{ width: "25vw" }}
    >
      <h2 style={{ padding: "10px" }}>Overall Progress</h2>
      <div className="new-dropdown">
        <Dropdown
          value={selectedCountry}
          options={countries}
          defaultValue={countries[0].name}
          onChange={onCountryChange}
          optionLabel="name"
          optionValue="name"
          showClear
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}
        />
      </div>

      <Chart type="line" data={lineStylesData} options={basicOptions} />
    </div>
  );
};

export default TeamProgressChart;
