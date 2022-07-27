import React from "react";
import "../../Styles/Layout.css";
import { useLocation } from "react-router-dom";

const MainContainer = ({ children }) => {
  const { pathname } = useLocation();
  const PageTitle = pathname.substr(1, pathname.length);

  return (
    <div class="layout-main-container">
      {pathname !== "/Dashboard" && (
        <h1 style={{ marginBottom: "20px" }}>{PageTitle}</h1>
      )}
      {children}
    </div>
  );
};

export default MainContainer;
