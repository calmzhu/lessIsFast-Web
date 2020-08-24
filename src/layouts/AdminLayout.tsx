import React from 'react';

import {Sidebar} from "./widgets/Sidebar";
import {Toolbar} from "./widgets/Toolbar";
import {Switch, Route} from "react-router-dom";
import {globalRoutes} from "../globalRoutes";
import {Application} from "../views/Application";
import {Namespace} from "../views/Namespace";

export function AdminLayout() {
    return <div className="wrapper">
        <Sidebar routes={globalRoutes} />
        <div className={"main-panel"}>
            <Toolbar />
            <div className={"content"}>
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"col-md-12"}>
                            <div className={"card"}>
                                <Switch>
                                    <Route path={"/admin/application"} component={Application}></Route>
                                    <Route path={"/admin/namespace"} component={Namespace}></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}