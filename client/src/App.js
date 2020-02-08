import React, { Fragment, useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Register from "./component/auth/register";
import Login from "./component/auth/login";

import SetAuthToken from "./component/utils/SetAuthToken";
import PrivateRoute from "./component/routing/PrivateRoute";

import PostState from "./component/context/post/PostState";
import AuthState from "./component/context/auth/AuthState";
import "./App.css";

if (localStorage.token) {
  SetAuthToken(localStorage.token);
}
function App() {
  return (
    <AuthState>
      <PostState>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </PostState>
    </AuthState>
  );
}

export default App;
