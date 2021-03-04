import React from "react";
import { BrowserRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import Home from "../../pages/home";
import Bitbucket from "../../pages/bitbucket";
import Gitlab from "../../pages/gitlab";

const Navigator = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RouterSwitch>
        <Route exact path="/">
          <Home />
        </Route>
      </RouterSwitch>
    </BrowserRouter>
  );
};

export default Navigator;
