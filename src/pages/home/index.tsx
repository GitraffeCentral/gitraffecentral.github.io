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
        <div
          style={{
            //background: "#1f1f1f",
            width: "100%",
            maxWidth: "100%",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            padding: "0px 24px 24px 24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Portal
              color="orange"
              style={{ flex: "1.25 1", minWidth: "400px" }}
              title="gitraffe"
              slogan="Aspirin for Version Control."
              description="A beautiful and completely free Git client"
            />

            <Portal
              color="magenta"
              style={{ flex: "1 1", minWidth: "400px" }}
              slogan="Our private beta has started!"
              description="Simply fill out a form to request access, and we will be in touch."
              textExtra={
                <div style={{ marginTop: "8px" }}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://x836on4k62z.typeform.com/to/KGopr4aR"
                  >
                    <Button className="gitraffe-button" size="large">
                      Request Access <ArrowRightOutlined />
                    </Button>
                  </a>
                </div>
              }
            />
          </div>

          <Portal
            color="red"
            title="Commit Changes"
            slogan="Just select the files to commit and describe your changes."
            description="Not ready to commit? Stash all changes with one click."
            imageSrc={CommitFilesPic}
          />

          <Portal
            color="black"
            imageFirst
            imageSrc={Raffy}
            noImageStyle
            imageStyle={{ height: "128px" }}
            slogan="Meet raffy, your personal Git assistant."
            description="Here to guide you while you are using Git commands."
            textMargin="0px 0px 0px 24px"
          />

          <Portal
            color="magenta"
            imageSrc={InteractiveRebaseMac}
            imageFirst
            title="Interactive Rebase"
            slogan="The power to change commit history, at your fingertips."
            description="Easily change previous commit messages, squash commits,fixup commits, and re-order commits."
          />

          <Portal
            color="orange"
            slogan="There is no limit to how many accounts you can connect to Gitraffe."
            description={
              <div>
                Connect your <GithubFilled />,{" "}
                <FaBitbucket style={{ position: "relative", top: "3px" }} /> and{" "}
                <GitlabFilled /> accounts. Or just use your name and email.
                Gitraffe is free for both personal and professional use.
              </div>
            }
          />

          <Portal
            color="red"
            imageSrc={CherryPickPic}
            title="Cherry Pick"
            slogan="Accidentally committed to the wrong branch?"
            description="Don't worry, you can quickly copy commits from one branch to another."
          />

          {/*<Row
            align="middle"
            justify="center"
            style={{ width: "100%", flex: "0 0 auto" }}
          >
            <div
              style={{ color: "white", fontSize: "2vh", textAlign: "center" }}
            >
              <strong>Gitraffe</strong> helps you leverage the power of Git
              through a beautiful and intuitive interface.
              <br />
              Minimize Git hiccups with Interactive Rebase, Cherry Picking,
              Reflog, Commit + History Editing, Quick Actions, and Tailored
              Workspaces.
              <br />
              <br />
              Available on Windows, Mac, and Linux.
            </div>
          </Row>*/}

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
                Created by Team Raffe 2020-2021
              </div>
            </Row>
          </Footer>
        </div>
      </div>
    );
  }
};

export default withRouter(Home);
