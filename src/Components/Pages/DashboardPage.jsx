import React from "react";
import AvatarGroups from "../PagesComponents/AvatarGroups";
import DashboardStats from "../PagesComponents/DashboardStats";
import EmployeesTasksList from "../PagesComponents/EmployeesTasksList";
import TeamProgressChart from "../PagesComponents/TeamProgressChart";
import WorkingHoursStats from "../PagesComponents/WorkingHoursStats";

const DashboardPage = () => {
  return (
    <div className="grid">
      <div className="col-12 xl:col-8">
        <DashboardStats />
        <EmployeesTasksList />
      </div>
      <div className="col-12 xl:col-4 ">
        <div className="RightSideContainer">
          <AvatarGroups />
          <WorkingHoursStats />
          <TeamProgressChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
