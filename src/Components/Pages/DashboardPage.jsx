import React from "react";
import AvatarGroups from "../PagesComponents/AvatarGroups";
import DashboardStats from "../PagesComponents/DashboardStats";
import EmployeesTasksList from "../PagesComponents/EmployeesTasksList";
import TeamProgressChart from "../PagesComponents/TeamProgressChart";
import WorkingHoursStats from "../PagesComponents/WorkingHoursStats";

const DashboardPage = () => {
  return (
    <div>
      <DashboardStats />
      <div className="RightSideContainer">
        <AvatarGroups />
        <WorkingHoursStats />
        <TeamProgressChart />
      </div>
      <EmployeesTasksList />
    </div>
  );
};

export default DashboardPage;
