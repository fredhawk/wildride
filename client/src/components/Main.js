import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from '../containers/Register';
import ExploreJobs from '../containers/ExploreJobs';
import PostJob from '../containers/PostJob';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/post-job" component={PostJob} />
        <Route path="/register" component={Register} />
        <Route path="/find-job" component={ExploreJobs} />
      </Switch>
    </main>
  );
};

export default Main;
