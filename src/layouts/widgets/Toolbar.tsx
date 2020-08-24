import React from "react";

export function Toolbar() {
    return (
        <nav className={"navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top"}>
            <div className={"container-fluid"}>
                <div className={"collapse navbar-collapse justify-content-end"}>
                    <ul className={"navbar-nav"}>
                        <div className={"nav-link"}>
                            <li className={"nav-item dropdown"}>
                                <i className={"material-icons"}>person</i>
                            </li>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    )
}