import React, { useReducer } from "react";
import uuid from "uuid";
import axios from "axios";
import PostContext from "./postContext";
import postReducer from "./postReducer";

const PostState = props => {
  const initialState = {
    posts: [
      {
        id: 1,
        title: "First",
        body: "here is first post",
        comment: [],
        like: 1
      }
      // {
      //   id: 2,
      //   title: "Second",
      //   body: "here is second post",
      //   comment: "here is 2comment",
      //   like: 2
      // },
      // {
      //   id: 3,
      //   title: "Third",
      //   body: "here is third post",
      //   comment: "here is 3comment",
      //   like: 3
      // }
    ],
    setcurrent: null,
    comment: null
  };

  const [state, dispatch] = useReducer(postReducer, initialState);

  //Get Post
  const getPost = async () => {
    const res = await axios.get("/api/post");
    dispatch({
      type: "GET_POST",
      payload: res.data
    });
  };

  //Add Post
  const addPost = async post => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/post", post, config);
    dispatch({
      type: "ADD_POST",
      payload: res.data
    });
  };

  // Clear Posts
  const clearPosts = () => {
    dispatch({ type: "CLEAR_POSTS" });
  };

  //Delete Post
  const deletePost = async id => {
    await axios.delete(`/api/post/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  };

  // Set Current post
  const setCurrent = post => {
    dispatch({ type: "SET_CURRENT", payload: post });
  };

  //Clear Current Post
  const clearCurrent = () => {
    dispatch({ type: "CLEAR_CURRENT" });
  };

  // Update Post
  const updatePost = async post => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.put(`/api/post/${post._id}`, post, config);
    dispatch({ type: "UPDATE_POST", payload: res.data });
  };

  // Set Comment post
  const setComment = post => {
    dispatch({ type: "SET_COMMENT", payload: post });
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.posts,
        current: state.current,
        addPost,
        deletePost,
        setCurrent,
        clearCurrent,
        updatePost,
        setComment,
        getPost,
        clearPosts
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState;
