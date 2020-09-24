import React from 'react';
import MainNavContainer from './main_nav/main_nav_container';
import SigninContainer from './session/login_form_container'
import SignupContainer from './session/signup_container';
import Home from './home/home';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"
import GreetingContainer from './greeting/greeting_container';

export default () => {
    return(
    <div>
        <Route path="/" component={MainNavContainer} />
        {/* <Route path="/signup" component={SignupContainer} /> */}
        <AuthRoute path="/login" component={SigninContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <Route exact path="/" component={Home} />
    </div>
    )
};
