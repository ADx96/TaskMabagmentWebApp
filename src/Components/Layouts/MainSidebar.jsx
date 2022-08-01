import React, { useRef } from "react";
import { Toast } from "primereact/toast";
import { Sidebar } from "primereact/sidebar";
import "../../Styles/Layout.css";
import Menu from "./Menu";

const MainSidebar = () => {
  const toast = useRef(null);
  return (
    <Sidebar
      className="layout-sidebar"
      modal={false}
      showCloseIcon={false}
      visible
    >
      <Toast ref={toast}></Toast>
      <Menu />
    </Sidebar>
  );
};

export default MainSidebar;
