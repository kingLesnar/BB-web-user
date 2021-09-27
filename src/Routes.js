import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignIn from "./Components/Signin.js"
import HomePage from "./Homepage"


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component= {SignIn} />
                <Route path="/homepage" exact component= {HomePage} />
            </Switch>
        </BrowserRouter>
    )
}

 