import React, {FunctionComponent, MouseEvent} from "react";
import {useLocation, Link} from 'react-router-dom';
import {routeProps} from "../../globalRoutes";
import classNames from "classnames";

type SidebarProps = {
    routes: routeProps[]
}

type SidebarLinkItemProps = {
    prop: routeProps,
    prefix?: string
}

// If a route is simple link(with prop path and without prop views)
type SidebarLinkListProps = {
    prop: routeProps,
    handClick: (event: MouseEvent, name: string) => any,
    collapseOpened: boolean

}
const SidebarLinkItem: FunctionComponent<SidebarLinkItemProps> = ({prop, prefix}) => {
    const realLink = prefix === undefined ? prop.path : prefix + prop.path
    let location = useLocation().pathname;
    return <li className={classNames("nav-item", {active: location === realLink})}>
        <Link className={"nav-link"} to={realLink}>
            <i className={"material-icons"}>{prop.icon}</i>
            <p>{prop.name}</p>
        </Link>
    </li>
}


// If a route is link DrawerList(with prop views, ignore path)
const SidebarLinkList: FunctionComponent<SidebarLinkListProps> = ({prop, handClick, collapseOpened}) => {
    return <li className={"nav-item"}>
        <a className={"nav-link"} aria-expanded={collapseOpened} onClick={(event) => handClick(event, prop.name)}
           href={prop.path}>
            <i className="material-icons">{prop.icon}</i>
            <p> {prop.name}
                <b className="caret"></b>
            </p>
        </a>
        <div className={classNames("collapse", {"show": collapseOpened})}>
            <ul className={"nav"}>
                {
                    prop.views?.map((subItem, index) => <SidebarLinkItem prop={subItem} prefix={prop.path}
                                                                         key={index} />)
                }
            </ul>
        </div>
    </li>
}

interface collapse {
    [key: string]: boolean
}

export const Sidebar: FunctionComponent<SidebarProps> = ({routes}) => {
    const bgImageStyle = {
        backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/sidebar-1.jpg)',
    }
    let state = {} as collapse

    for (let route of routes) {
        state[route.name] = route.collapse === undefined ? false : route.collapse
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [collapseState, setCollapseState] = React.useState<collapse>(state)

    const clickHandler = (event: MouseEvent, name: string) => {
        event.preventDefault()
        setCollapseState({...collapseState, [name]: !collapseState[name]})
    }

    return <div className="sidebar" data-color="green" data-background-color={"black"}>
        <div className="logo">
            <a href={"/"} className="simple-text logo-normal">
                Less is Fast
            </a>
        </div>
        <div className="sidebar-wrapper">
            <ul className="nav">
                {routes.map((routeProp, index) => routeProp.views === undefined ?
                    <SidebarLinkItem prop={routeProp} key={index} /> :
                    <SidebarLinkList key={index} prop={routeProp} handClick={clickHandler}
                                     collapseOpened={collapseState[routeProp.name]} />
                )}
            </ul>
        </div>
        <div style={bgImageStyle} className={"sidebar-background"}></div>
    </div>
}