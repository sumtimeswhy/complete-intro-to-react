import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const ErrorNotFound = () => <h1>404 Not Found</h1>;

/* Without switch, 404 is always rendered alongside matched component */
// Switch says render exactly one component
// 404 route matches every path so need switch
const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route component={ErrorNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
