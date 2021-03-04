import React from "react";
import "./index.css";
import { Layout } from "antd";
import Navigator from "../navigator";

const App = () => {
  return (
    <Layout className="application_layout">
      <Layout.Content>
        <Navigator />
      </Layout.Content>
    </Layout>
  );
};

export default App;
