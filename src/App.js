import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import RegisterUserForm from "./components/register/Register";
import LoginUserForm from './components/login/Login';
import Admin from './components/admin/Admin';
import Layout from './layout/index';
import PrivateRoute from './utils/PrivateRoute';
import UserDashboardServer from './components/admin/Admin';
import Authentication from './components/authentication/Authentication';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


;
function App() {
  return (
    <div className="App">
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Layout} />
            <Route path="/activate/:token" exact component={Authentication} />
            <Route
              exact
              path="/login"
              render={() =>
                localStorage.getItem('token') ? (
                  <Redirect to="/admin" />
                ) : (
                  <LoginUserForm />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={() =>
                localStorage.getItem('token') ? (
                  <Redirect to="/admin" />
                ) : (
                  <RegisterUserForm />
                )
              }
            />
            <PrivateRoute exact path="/admin" component={UserDashboardServer} />
            <Route exact path="/admin" component={Admin} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
