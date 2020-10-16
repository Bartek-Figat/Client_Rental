import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterUserForm from "./components/register/Register";
import LoginUserForm from './components/login/Login';
import Layout from './layout/index';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

;
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route exact path="/register" component={RegisterUserForm} />
            <Route exact path="/login" component={LoginUserForm} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
