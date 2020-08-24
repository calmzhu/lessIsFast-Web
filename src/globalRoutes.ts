import React from "react";
import {Application} from "./views/Application";
import {Namespace} from "./views/Namespace";

export interface routeProps {
    // If views is defined, path will be ignored,then route item  will transform to  list.
    // Or will be transformed to tag <a href="{link}">
    // Can only nested list once
    path?: string,
    name: string,
    icon?: string,
    collapse?: boolean,
    views?: routeProps[],
    component?: React.FC
}

export const globalRoutes:routeProps[] = [
    {
        name: 'Project',
        icon: 'dashboard',
        collapse: false,
        path: '/admin',
        views: [
            {
                path: "/application",
                name: "Application",
                component: Application,
                icon: "cloud",
                // layout: "",
            },
            {
                path: "/namespace",
                name: "Namespace",
                component: Namespace,
                icon: "dashboard"
            }
        ],
    },
    {
        path: "/admin",
        name: 'Cloud',
        icon: 'cloud',
    }
]
