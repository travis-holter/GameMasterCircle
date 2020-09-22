import React from 'react';
import MainNavContainer from './main_nav/main_nav_container';

import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"

export default () => {
    return(
    <div>
        <Route path="/" component={MainNavContainer} />
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignupContainer} />
        {/* <Route path="/login" component={SignupContainer} /> */}
        {/* <AuthRoute path="/signup" component={SignupContainer} /> */}
    </div>
    )
};