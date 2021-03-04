import React from "react";
import { HashRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import Home from "../../pages/home";
import Bitbucket from "../../pages/bitbucket"
import Gitlab from "../../pages/gitlab"

const Navigator = () => {

    return (
        <HashRouter>
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
        </HashRouter>
    )
}

export default Navigator;