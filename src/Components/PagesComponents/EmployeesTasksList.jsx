import React, { useState } from "react";
import "../../Styles/OrderListStyles.css";
import { ProgressBar } from "primereact/progressbar";

const EmployeesTasksList = () => {
  const [data, setData] = useState([
    {
      key: "1",
      TaskName: "My new Task 1",
      EmpName: "Ahmed",
      TaskDate: "10/May/2021",
      DeadLine: "till december 10",
    },
    {
      key: "2",
      TaskName: "My new Task 1",
      EmpName: "Ahmed",
      TaskDate: "10/May/2021",
      DeadLine: "till december 10",
    },
    {
      key: "3",
      TaskName: "My new Task 1",
      EmpName: "Ahmed",
      TaskDate: "10/May/2021",
      DeadLine: "till december 10",
    },
    {
      key: "4",
      TaskName: "My new Task 1",
      EmpName: "Ahmed",
      TaskDate: "10/May/2021",
      DeadLine: "till december 10",
    },
  ]);

  return (
    <>
      <h2>This Week</h2>
      <div className="Task-list-container">
        {data.map((item) => (
          <div
            key={item.key}
            className="surface-card shadow-2 border-round "
            style={{ height: "100px" }}
          >
            <div className="item-container">
              <ul className="item-wrapper">
                <li className="item-list">
                  <h4>{item.TaskName}</h4>
                  <p className="sub-text"> {item.EmpName}</p>
                </li>

                <li className="item-list">
                  <ProgressBar
                    style={{ top: "5px", right: "40px" }}
                    value={50}
                  ></ProgressBar>
                </li>
                <li className="item-list">
                  <h4>{item.TaskDate}</h4>
                </li>
                <li className="item-list-icon">
                  <i className="pi pi-arrow-right"></i>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EmployeesTasksList;
