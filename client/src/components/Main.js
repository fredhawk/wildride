import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Register from '../containers/Register';
import ExploreJobs from '../containers/ExploreJobs';

const Main = props => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
        <Route path="/register" component={Register} />
        <Route path="/findjob" component={ExploreJobs} />
      </Switch>
    </main>
  );
};

export default Main;
