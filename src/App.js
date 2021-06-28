import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Indonesia } from './pages/Indonesia';
import { Provinsi } from './pages/Provinsi';
import { Register } from './pages/Register/index';
import { Login } from './pages/Login/index';
import { NoMatch } from './pages/NoMatch';

function App() {
  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/indonesia" component={Indonesia} />
            <Route path="/provinsi" component={Provinsi} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
    </React.Fragment>
  );
}

export default App;