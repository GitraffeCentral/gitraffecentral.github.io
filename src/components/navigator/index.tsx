import React from "react";
import { BrowserRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import Home from "../../pages/home";
import Bitbucket from "../../pages/bitbucket"
import Gitlab from "../../pages/gitlab"

const Navigator = () => {

    return (
        <BrowserRouter>
            <RouterSwitch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/oauth2/bitbucket/callback">
                    <Bitbucket />
                </Route>
                <Route exact path="/oauth2/gitlab/callback">
                    <Gitlab />
                </Route>
            </RouterSwitch>
        </BrowserRouter>
    )
}

export default Navigator;