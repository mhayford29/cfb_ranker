import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

const PrivateRoute = ({ component: Component, loginStatus, ...rest }) => {
  return(
    <Route {...rest} render={(props) => {
      return(
        loginStatus==='LOGGED_IN'
          ? <Component {...props}/>
          : <Redirect to='/'/>
      )
    }} />
  )
}

export default PrivateRoute;