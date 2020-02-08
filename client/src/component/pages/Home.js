import React, { Fragment, useContext, useEffect } from "react";
import Posts from "../posts/Posts";
import PostForm from "../posts/PostForm";
import AuthContext from "../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;
  console.log("auth", authContext);

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-6">
          <PostForm />
        </div>
        <div className="col-md-6">
          <Posts />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
