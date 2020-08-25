import React from 'react';
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import {Sidebar} from "./widgets/Sidebar";
import {Toolbar} from "./widgets/Toolbar";
import {globalRoutes} from "../globalRoutes";
import {Namespace} from "../views/Namespace";
import {Application} from "../views/Application";

export const AdminLayout: React.FC = (props) => {
    return <div className="wrapper">
        <Router>
            <Sidebar routes={globalRoutes} />
            <div className={"main-panel"}>
                <Toolbar />
                <div className={"content"}>
                    <div className={"container-fluid"}>
                        <div className={"row"}>
                            <div className={"col-md-12"}>
                                <div className={"card"}>
                                    <Switch>
                                        <Route path={"/admin/application"} exact={true} children={Application}></Route>
                                        <Route path={"/admin/namespace"} exact={true} children={Namespace}></Route>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router>

    </div>
}