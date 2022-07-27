import React from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";

const Navbar = () => {
  const start = (
    <img
      alt="logo"
      src="showcase/images/logo.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div style={{ marginRight: "50px" }}>
      <Button
        icon="pi pi-fw pi-power-off"
        className="p-button-rounded p-button-secondary"
        aria-label="Bookmark"
      />
    </div>
  );

  return (
    <div className="card">
      <Menubar className="layout-topbar" start={start} end={end} />
    </div>
  );
};

export default Navbar;
