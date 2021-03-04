import React from "react";
import { Layout, Typography, Row } from "antd";
import {AppleFilled, WindowsFilled } from "@ant-design/icons";
import { FaUbuntu } from "react-icons/fa";
import "./index.css";
import InteractiveRebaseMac from "../../resources/interactive-rebase-mac.png";
import Header from "../../components/header";
import { useLocation, withRouter } from "react-router";
import Bitbucket, {} from "../bitbucket";
import Gitlab, {} from "../gitlab";

const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const location = useLocation();
  let authCode = new URLSearchParams(location.search).get("code");
  let provider = new URLSearchParams(location.search).get("provider");

  console.log(location);

  if(provider == "bitbucket") return <Bitbucket />
  else if(provider == "gitlab") return <Gitlab/>
  else {
    return (
      <div>
         <Header />
      <div
        style={{
          background: "#1f1f1f",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Row
          align="middle"
          justify="center"
          style={{ width: "100%", flex: "0 0 auto" }}
        >
          <Title
            style={{ fontSize: "8vh", color: "#a0aec0", textAlign: "center" }}
          >
            Aspirin for Version Control.
          </Title>
        </Row>
        <Row
          align="middle"
          justify="center"
          style={{ width: "100%", flex: "0 0 auto" }}
        >
          <div style={{ color: "white", fontSize: "2vh", textAlign: "center" }}>
            <strong>Gitraffe</strong> helps you leverage the power of Git through
            a beautiful and intuitive interface.
            <br />
            Minimize Git hiccups with Interactive Rebase, Cherry Picking, Reflog,
            Commit + History Editing, Quick Actions, and Tailored Workspaces.
            <br />
            <br/>
            Available on Windows, Mac, and Linux.
          </div>
        </Row>
        <Row
          align="middle"
          justify="center"
          style={{ width: "100", flex: "1 1", marginTop: "5vh", marginBottom: "5vh" }}
        >
          <img src={InteractiveRebaseMac} width="60%" style={{filter: "drop-shadow(0 0 1rem #2a2a2a)"}}/>
        </Row>
  
        <Footer style={{
          background: "#1f1f1f",
          width: "100%",
        }}>
                <Row
          align="middle"
          justify="center"
          style={{ width: "100%", flex: "0 0 auto" }}
        >
          <Title level={5} style={{color: "white", fontWeight: "normal"}}>Team Raffe, 2021</Title>
        </Row>
        </Footer>
      </div>
      </div>
    );
  }
};

export default withRouter(Home);
