import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from '../containers/Register';
import MeetSearch from '../containers/MeetSearch';
import PostMeet from '../containers/PostMeet';
import Login from '../containers/Login';
import Meet from './Meet';
import Profile from './Profile';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/meet/new" component={PostMeet} />
        <Route path="/register" render={routeProps => <Register {...props} forRoute={routeProps} />} />
        <Route exact path="/meet" component={MeetSearch} />
        <Route path="/meet/:id" render={routeProps => <Meet {...props} forRoute={routeProps} />} />
        <Route path="/login" render={routeProps => <Login {...props} forRoute={routeProps} />} />
        <Route path="/logout" component={Home} />
        <Route path="/profile" render={routeProps => <Profile {...props} forRoute={routeProps} />} />
      </Switch>
    </main>
  );
};

export default Main;
