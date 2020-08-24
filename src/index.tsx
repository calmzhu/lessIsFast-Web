import React from 'react';
import ReactDOM from 'react-dom';
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import {AdminLayout} from './layouts/AdminLayout';


const history = createBrowserHistory();

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Switch>
                <Route path={"/admin"} component={AdminLayout}></Route>
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
