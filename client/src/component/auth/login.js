import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Login = () => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "Invalid Email or Password") {
      alert(error);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const { email, password } = user;
  const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (email === "" || password === "") {
      console.log("enter email or pass");
    } else {
      login(user);
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>
          <b>Account</b> Login
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={onchange}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onchange}
              required
              minLength="6"
            ></input>
            <input
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
