import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Sidebar } from "primereact/sidebar";
import "../../Styles/Layout.css";
const MainSidebar = () => {
  const toast = useRef(null);
  let items = [
    {
      label: "Options",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          command: () => {
            window.location.hash = "/fileupload";
          },
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
          url: "http://primetek.com.tr",
        },
      ],
    },
    {
      label: "Account",
      items: [
        {
          label: "Options",
          icon: "pi pi-fw pi-cog",
          command: () => {
            window.location.hash = "/";
          },
        },
        { label: "Sign Out", icon: "pi pi-fw pi-power-off" },
      ],
    },
  ];

  return (
    <Sidebar
      className="layout-sidebar"
      modal={false}
      showCloseIcon={false}
      visible
    >
      <Toast ref={toast}></Toast>
      <Menu model={items} className="Menu-list" />
    </Sidebar>
  );
};

export default MainSidebar;
