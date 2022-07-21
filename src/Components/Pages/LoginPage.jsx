import React from "react";
import { Card } from "primereact/card";
import LoginForm from "../Forms/LoginForm";
import { useMediaQuery } from "react-responsive";
import SplitCarousel from "../PagesComponents/SplitCarousel";

const DivStyle = {
  justifyContent: "center",
  alignItems: "center",
  display: "flex",
  height: "100vh",
  textAlign: "center",
};
const DivStyleMobile = {
  textAlign: "center",
  marginTop: "10px",
};

const LoginPage = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      {!isTabletOrMobile ? (
        <div style={DivStyle}>
          <Card
            style={{
              height: "700px",
              width: "40%",
              borderRadius: "2px",
            }}
          >
            <SplitCarousel />
          </Card>
          <Card style={{ height: "700px", width: "40%", borderRadius: "2px" }}>
            <LoginForm />
          </Card>
        </div>
      ) : (
        <div style={DivStyleMobile}>
          <Card
            style={{
              height: "400px",
              width: "80%",
              borderRadius: "5px 5px 0px 0px",
              margin: "auto",
            }}
          >
            <SplitCarousel />
          </Card>
          <Card
            style={{
              height: "450px",
              width: "80%",
              borderRadius: "0px 0px 5px 5px",
              margin: "auto",
            }}
          >
            <LoginForm />
          </Card>
        </div>
      )}
    </>
  );
};

export default LoginPage;
