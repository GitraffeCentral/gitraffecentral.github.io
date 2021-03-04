import React from "react";
import { Layout, Typography, Row, Button} from "antd";
import { FaGitlab } from "react-icons/fa";
import "./index.css";
import { useLocation } from "react-router";

const { Title } = Typography;

const Gitlab = () => {
 const location = useLocation();
 let authCode = new URLSearchParams(location.search).get("code");
 let deeplink = `gitraffe://#add-account?visible=true&code=${authCode}&service=gitlab&time=${Date.now()}`
 console.log(deeplink);

  return (
    <Layout>
        <Layout.Header 
            style = {{
                height : "10vh",
                width: "100vw",
                backgroundColor: "#FC6D27"
            }}
        />
        <Layout.Content
            style = {{
                height : "80vh",
                width: "100vw",
                backgroundColor: "#FC6D27"
            }}        
        >
            <Row align="middle" justify="center">
                <Title style={{color : "white", fontWeight : 300, alignContent : "center"}}>Gitraffe has successfully connected to </Title>
            </Row>
            <Row align="middle" justify="center">
                <FaGitlab size={128} style = {{color : "white"}}/>
            </Row>
            <Row align="middle" justify="center" style = {{marginTop: "5vh"}}>
                <Button type="primary" shape="round" size={"large"}
                    className="buttons flatbutt"
                    style= {{
                        backgroundColor : "#E2432A",
                        border : "0"
                    }}
                    >
                    <a href = {deeplink} style={{textDecoration : "none"}}>Complete Gitlab Authentication</a>
                    </Button>
            </Row>
        </Layout.Content>
        <Layout.Footer 
            style = {{
                height : "10vh",
                width: "100vw",
                backgroundColor: "#FC6D27"
            }}
        />
    </Layout>
  );
};

export default Gitlab;