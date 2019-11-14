import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const PrivateRoute = ({ component: Component, loginStatus, ...rest }) => (
  <Route {...rest} render={(props) => (
    loginStatus==='LOGGED_IN'
      ? <Component {...props}/>
      : <Redirect to='/'/>
  )} />
)

export default PrivateRoute;