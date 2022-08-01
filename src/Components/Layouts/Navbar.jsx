import React, { useRef } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Badge } from "primereact/badge";
import OverlayPopup from "../PagesComponents/OverlayPopup";

const Navbar = () => {
  const op = useRef(null);
  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      height="40"
      className="mr-2"
    />
  );
  const end = (
    <div style={{ marginRight: "50px" }}>
      <Button
        tooltip="Notification"
        tooltipOptions={{
          position: "bottom",
          mouseTrack: true,
          mouseTrackTop: 15,
        }}
        icon="pi pi-bell"
        onClick={(e) => op.current.toggle(e)}
        className="p-button-rounded p-button-info"
        aria-label="Notification"
      >
        <Badge
          style={{
            marginLeft: "1.5rem",
            position: "fixed",
            bottom: "45px",
            backgroundColor: "red",
          }}
          value="8"
        ></Badge>
      </Button>
      <Button
        tooltip="Sign Out"
        tooltipOptions={{
          position: "bottom",
          mouseTrack: true,
          mouseTrackTop: 15,
        }}
        icon="pi pi-fw pi-power-off"
        style={{ marginLeft: "10px" }}
        className="p-button-rounded p-button-secondary"
        aria-label="Bookmark"
      />

      <OverlayPopup op={op} />
    </div>
  );

  return (
    <div className="card">
      <Menubar className="layout-topbar" start={start} end={end} />
    </div>
  );
};

export default Navbar;
