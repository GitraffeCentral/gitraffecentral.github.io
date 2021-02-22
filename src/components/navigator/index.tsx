import React from "react";
import { BrowserRouter, Route, Switch as RouterSwitch } from "react-router-dom";
import Home from "../../pages/home";

const Navigator = () => {

    return (
        <BrowserRouter>
            <RouterSwitch>
                <Route exact path="/">
                    <Home />
                </Route>
            </RouterSwitch>
        </BrowserRouter>
    )
}

export default Navigator;