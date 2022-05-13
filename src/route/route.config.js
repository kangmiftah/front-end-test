
import React from 'react';
import * as Page from '../pages';
const pages = (namePage) =>
React.lazy(() =>
    import('../pages')
        .then((m) => ({ default: m[namePage] }))
        .catch((err) => err)
);

export const routes = [
    {
        key:"/",
        isAdmin: false,
        component: Page.Home,
        exact: true
    },{
        key:"/post/:id",
        isAdmin: false,
        component: Page.Detail,
        exact: true
    }
]