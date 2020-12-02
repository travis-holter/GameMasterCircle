import React from 'react';
import MainNavContainer from './main_nav/main_nav_container';
import SigninContainer from './session/login_form_container'
import SignupContainer from './session/signup_container';
import HomeContainer from './home/home_container';
import AllQuestionsIndexContainer from './questions/all_questions_items_container';
import ShowQuestionContainer from './questions/show_question_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from "../utils/route_utils"


export default () => {
    return(
    <div>

            <Route path="/" component={MainNavContainer} />

        <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/questions/:questionId" component={ShowQuestionContainer}/>
            <Route path="/questions" component={AllQuestionsIndexContainer} />
            <AuthRoute path="/login" component={SigninContainer} />
            <AuthRoute path="/signup" component={SignupContainer} />
        </Switch>
    </div>
    )
};
