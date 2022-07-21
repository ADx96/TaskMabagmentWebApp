import React, { useRef } from "react";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Sidebar } from "primereact/sidebar";
import "../../Styles/Layout.css";
const MainSidebar = () => {
  const toast = useRef(null);
  const items = [
    {},
    {
      label: "Navigate",
      items: [
        {
          label: "React Website",
          icon: "pi pi-external-link",
          url: "https://reactjs.org/",
        },
        {
          label: "Create task",
          icon: "pi pi-upload",
          command: (e) => {
            window.location.hash = "/fileupload";
          },
        },
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
