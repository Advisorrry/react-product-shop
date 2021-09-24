import React from 'react'
import { Route, Switch } from 'react-router'
import { CartRoute, HomeRoute } from '../routes'

export const AppRouter = () => {
    return (
        <Switch>
            {HomeRoute.map((route) => (
                <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
            ))}
            {CartRoute.map((route) => (
                <Route key={route.path} path={route.path} exact={route.exact} component={route.component} />
            ))}
        </Switch>
    )
}
