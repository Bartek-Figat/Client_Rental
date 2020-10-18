import React from 'react';
import { Route, Redirect } from 'react-router';

export default ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      typeof window.localStorage.token === 'string' ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);
