import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Register = () => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;
  let history = useHistory();
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
    if (error === "User Already Exists") {
      alert(error);
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  console.log(authContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });
  const { name, email, password, password2 } = user;
  const onchange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      alert("Password not Match");
    } else {
      register(user);
    }
  };
  return (
    <div className="container">
      <div className="form-container">
        <h1>
          <b>Account</b> Register
        </h1>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onchange}
              required
            ></input>
          </div>
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
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onchange}
              required
              minLength="6"
            ></input>
            <input
              type="submit"
              value="Register"
              className="btn btn-primary btn-block"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
