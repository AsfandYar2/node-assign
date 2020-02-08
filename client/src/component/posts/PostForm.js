import React, { useState, useContext, Fragment, useEffect } from "react";
import PostContext from "../context/post/postContext";

const PostForm = () => {
  const postContext = useContext(PostContext);
  const { addPost, current, clearCurrent, updatePost } = postContext;

  const [post, setPost] = useState({
    title: "",
    body: "",
    comment: "",
    like: ""
  });
  const { title, body } = post;

  useEffect(() => {
    if (current === null) {
      setPost({
        title: "",
        body: "",
        comment: "",
        like: ""
      });
    } else {
      setPost({ ...current });
    }
  }, [current, postContext]);

  const onChange = e => setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    console.log(post);
    if (current !== null) {
      updatePost(post);
    } else {
      addPost(post);
    }
    clearCurrent();
  };
  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h3>{current ? "Edit Post" : "Add Post"}</h3>
        <input
          type="text"
          placeholder="Add Title"
          name="title"
          value={title}
          onChange={onChange}
          required
        />
        <textarea
          rows="10"
          cols="40"
          type="text"
          placeholder="Add Post"
          name="body"
          value={body}
          onChange={onChange}
          required
        />
        <div>
          <input
            type="submit"
            value={current ? "Update Post" : "Post"}
            className="btn btn-info btn-block"
          />
          {current && (
            <button className="btn btn-secondary btn-block" onClick={clearAll}>
              Clear
            </button>
          )}
        </div>
      </form>
    </Fragment>
  );
};

export default PostForm;
