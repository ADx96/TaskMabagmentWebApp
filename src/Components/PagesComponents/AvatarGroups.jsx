import { AvatarGroup } from "primereact/avatargroup";
import { Avatar } from "primereact/avatar";
import AvatarImage from "../../Images/Avatar.png";
import React from "react";

const AvatarGroups = () => {
  return (
    <div className="card">
      <h2>Team Member</h2>
      <AvatarGroup className="mb-3">
        <Avatar image={AvatarImage} size="xlarge" shape="circle" />
        <Avatar image={AvatarImage} size="xlarge" shape="circle" />
        <Avatar image={AvatarImage} size="xlarge" shape="circle" />
        <Avatar image={AvatarImage} size="xlarge" shape="circle" />
        <Avatar image={AvatarImage} size="xlarge" shape="circle" />
        <Avatar
          label="+2"
          shape="circle"
          size="xlarge"
          style={{ backgroundColor: "#9c27b0", color: "#ffffff" }}
        />
      </AvatarGroup>
    </div>
  );
};

export default AvatarGroups;
