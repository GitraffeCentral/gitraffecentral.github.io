import React from "react";
import { Layout, Typography, Row, Button } from "antd";
import {
  AppleFilled,
  ArrowRightOutlined,
  GithubFilled,
  GitlabFilled,
  WindowsFilled,
} from "@ant-design/icons";
import { FaBitbucket, FaUbuntu } from "react-icons/fa";
import "./index.css";
import InteractiveRebaseMac from "../../resources/interactive-rebase-mac.png";
import Header from "../../components/header";
import { useLocation, withRouter } from "react-router";
import Bitbucket from "../bitbucket";
import Gitlab from "../gitlab";
import Raffy from "../../resources/raffy.svg";
import Portal from "../../components/portal";
import CommitFilesPic from "../../resources/commit-files.png";
import CherryPickPic from "../../resources/cherry-pick.png";
import gitlab from "./gitlab.svg";
import github from "./github.svg";
import bitbucket from "./bitbucket.svg";

const { Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const location = useLocation();
  let authCode = new URLSearchParams(location.search).get("code");
  let provider = new URLSearchParams(location.search).get("provider");

  console.log(location);

  if (provider == "bitbucket") return <Bitbucket />;
  else if (provider == "gitlab") return <Gitlab />;
  else {
    return (
      <div style={{ background: "white", width: "100%" }}>
        <Header />
        <div className="home_cards-container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Portal
              color="blue"
              style={{
                flex: "1.25 1",
                minWidth: "min(400px, calc(100% - 36px))",
                boxSizing: "border-box",
              }}
              title="Gitraffe"
              slogan="Supercharge Programmer Productivity"
              description="Free Git GUI Client with a focus on clarity. Available on Windows, Mac, and Linux."
            />

            <Portal
              color="black"
              style={{
                flex: "1 1",
                minWidth: "min(400px, calc(100% - 36px))",
                boxSizing: "border-box",
              }}
              slogan="Our private beta has started!"
              description="Simply fill out a form to request access, and we will be in touch."
              textExtra={
                <div style={{ marginTop: "8px" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x836on4k62z.typeform.com/to/KGopr4aR"
                  >
                                <Button
                                type="primary"
                                shape="round"
                                size={"large"}
                                style={{
                                  background: "linear-gradient(45deg, #ee0979, #ff6a00)",
                                  borderWidth: "0",
                                  verticalAlign: "middle",
                                }}
            >
              Request Access <ArrowRightOutlined />
            </Button>
                  </a>
                </div>
              }
            />
          </div>

          <Portal
            color="magenta"
            title="Commit Changes"
            slogan="Just select the files to commit and describe your changes."
            description="Not ready to commit? Stash all changes with one click."
            imageSrc={CommitFilesPic}
          />

          <Portal
            color="green"
            imageSrc={Raffy}
            imageFirst
            imageStyle={{height: "40vh"}}
            title="Productivity Assistant"
            slogan="Meet Raffy, your personal Git assistant."
            description="Raffy guides you through operations, understands what you're trying to perform, and helps you perform Quick Actions."
          />

          <Portal
            color="yellow"
            imageSrc={InteractiveRebaseMac}
            imageFirst
            title="Interactive Rebase"
            slogan="The power to change commit history, at your fingertips."
            description="Easily change previous commit messages, squash commits, fixup commits, and re-order commits."
          />

          <Portal
            color="purple"
            title={
              <Row align="middle" justify="center" style={{color: "rgba(255, 255, 255, 0.8)"}}>
                Integrations
              </Row>
            }
            slogan={
              <Row align="middle" justify="center">
                There is no limit to how many accounts you can connect to Gitraffe.
              </Row>
            }
            description={
              <Row align="middle" justify="center">
                Gitraffe supports some of the most popular Git Hosting Services.
              </Row>
            }
            textExtra = {
              <Row align = "middle" justify="center">
                <a href="https://www.gitlab.com"><img src={gitlab} style={{height: "8vh",margin: "5vw"}}/></a>
                <a href="https://www.github.com"><img src={github} style={{height: "8vh", margin: "5vw"}}/></a>
                <a href="https://www.bitbucket.com"><img src={bitbucket} style={{height: "8vh", margin: "5vw"}}/></a>
              </Row>
            }
          />

          <Portal
            color="blue"
            imageSrc={CherryPickPic}
            title="Cherry Pick"
            slogan="Accidentally committed to the wrong branch?"
            description="Don't worry, you can quickly copy commits from one branch to another."
          />

          <Footer
            style={{
              borderRadius: "10px",
              margin: "18px",
              background: "var(--brand-foreground-color)",
            }}
          >
            <Row
              align="middle"
              justify="center"
              style={{ width: "100%", flex: "0 0 auto" }}
            >
              <div
                style={{ color: "white", fontSize: "16px", fontWeight: 550 }}
              >
                Team Raffe&nbsp; © 2021
              </div>
            </Row>
          </Footer>
        </div>
      </div>
    );
  }
};

export default withRouter(Home);
