import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import PostContext from "../context/post/postContext";

const Navbar = () => {
  const postContext = useContext(PostContext);
  const { clearPosts } = postContext;
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
    clearPosts();
  };

  const authLinks = (
    <Fragment>
      <ul>
        <li>
          <Link to="/">
            Hello <i>Mr. {user && user.name}</i>
          </Link>
        </li>
        <li>
          <a onClick={onLogout} href="#!">
            Logout
          </a>
        </li>
      </ul>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Fragment>
  );
  return (
    <Fragment>
      <div className="navbar bg-dark">
        <h3>ClientAPI</h3>
        <ul>
          {/* <li>
            <Link to="/">Home</Link>
          </li> */}
          <li>{isAuthenticated ? authLinks : guestLinks}</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li> */}
        </ul>
      </div>
    </Fragment>
  );
};

export default Navbar;
