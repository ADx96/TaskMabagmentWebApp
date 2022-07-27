import React from "react";
import { Card } from "primereact/card";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const circularDiv = {
  width: "100px",
  position: "absolute",
  textAlign: "left",
  top: "190px",
  height: "100px",
};

const WorkingHoursStats = () => {
  const percentage = 66;
  return (
    <Card style={{ width: "25rem", marginBottom: "2em" }}>
      <h3 style={{ textAlign: "right" }}>Total Working Time</h3>
      <h1 style={{ textAlign: "right" }}>114 HR</h1>
      <div style={circularDiv}>
        <CircularProgressbar
          style={{ width: "50px" }}
          value={66}
          text={`${percentage}%`}
        />
      </div>
    </Card>
  );
};

export default WorkingHoursStats;
