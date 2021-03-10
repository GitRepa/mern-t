import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Auth, Create, Detail, Links } from './pages'

export const useRoutes = isAutheticated => {
    if (isAutheticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <Links />
                </Route>
                <Route path="/create" exact>
                    <Create />
                </Route>
                <Route path="/detail/:id">
                    <Detail />
                </Route>
                <Redirect to="/create" />
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <Auth />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}