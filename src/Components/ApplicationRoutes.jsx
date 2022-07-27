import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import MainContainer from "./Layouts/MainContainer";
import MainSidebar from "./Layouts/MainSidebar";
import Navbar from "./Layouts/Navbar";
import AddTask from "./Pages/AddTask";
import LoginPage from "./Pages/LoginPage";
import DashboardPage from "./Pages/DashboardPage";
import CreateEmployee from "./PagesComponents/CreateEmployee";

const ApplicationRoutes = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/" && <Navbar />}
      {pathname !== "/" && <MainSidebar />}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/Dashboard"
          element={
            <MainContainer>
              <DashboardPage />
            </MainContainer>
          }
        />

        <Route
          path="/CreateTask"
          element={
            <MainContainer>
              <AddTask />
            </MainContainer>
          }
        />
        <Route
          path="/CreateEmployee"
          element={
            <>
              <MainContainer>
                <CreateEmployee />
              </MainContainer>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default ApplicationRoutes;
