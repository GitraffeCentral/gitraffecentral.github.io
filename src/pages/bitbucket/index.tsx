import React from "react";
import { Layout, Typography, Row, Button} from "antd";
import { IoLogoBitbucket } from "react-icons/io";
import "./index.css";
import { useLocation } from "react-router";

const { Title } = Typography;

const Bitbucket = () => {
 const location = useLocation();
 let authCode = new URLSearchParams(location.search).get("code");
 let deeplink = `gitraffe://#add-account?visible=true&code=${authCode}&service=bitbucket&time=${Date.now()}`
 console.log(deeplink);

  return (
    <Layout>
        <Layout.Header 
            style = {{
                height : "10vh",
                width: "100vw",
                backgroundColor: "#2684FF"
            }}
        />
        <Layout.Content
            style = {{
                height : "80vh",
                width: "100vw",
                backgroundColor: "#2684FF"
            }}        
        >
            <Row align="middle" justify="center">
                <Title style={{color : "white", fontWeight : 300, alignContent : "center"}}>Gitraffe has successfully connected to </Title>
            </Row>
            <Row align="middle" justify="center">
                <IoLogoBitbucket size={128} style = {{color : "white"}}/>
            </Row>
            <Row align="middle" justify="center" style = {{marginTop: "5vh"}}>
                <Button type="primary" shape="round" size={"large"}
                    className="buttons flatbutt"
                    style= {{
                        backgroundColor : "#0357D1",
                        border : "0"
                    }}
                    >
                    <a href = {deeplink} style={{textDecoration : "none"}}>Complete Bitbucket Authentication</a>
                    </Button>
            </Row>
        </Layout.Content>
        <Layout.Footer 
            style = {{
                height : "10vh",
                width: "100vw",
                backgroundColor: "#2684FF"
            }}
        />
    </Layout>
  );
};

export default Bitbucket;