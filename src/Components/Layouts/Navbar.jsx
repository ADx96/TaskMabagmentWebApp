import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItems } from "./MenuItems";

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
  const end = <h2>Create A New task</h2>;

  return (
    <div className="card">
      <Menubar
        className="layout-topbar"
        model={MenuItems}
        start={start}
        end={end}
      />
    </div>
  );
};

export default Navbar;
