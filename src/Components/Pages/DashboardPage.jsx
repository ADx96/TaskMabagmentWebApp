import React from "react";
import AvatarGroups from "../PagesComponents/AvatarGroups";
import DashboardStats from "../PagesComponents/DashboardStats";
import WorkingHoursStats from "../PagesComponents/WorkingHoursStats";

const DashboardPage = () => {
  return (
    <div>
      <DashboardStats />
      <div className="RightSideContainer">
        <AvatarGroups />
        <WorkingHoursStats />
      </div>
    </div>
  );
};

export default DashboardPage;
