import React, { useContext } from "react";
import PostContext from "../context/post/postContext";

const PostItem = ({ post }) => {
  const postContext = useContext(PostContext);
  const {
    deletePost,
    setCurrent,
    clearCurrent,
    setComment,
    comment
  } = postContext;
  //From posts
  const { _id, title, body } = post;

  const handleDelete = id => {
    deletePost(id);
    clearCurrent();
  };

  const handleEdit = post => {
    setCurrent(post);
  };
  // const handleComment = post => {
  //   setComment(post);
  //   console.log(comment);
  // };
  return (
    <div className="card bg-light">
      {console.log("post is ", post)}
      <h3>
        Titel: <b>{title.charAt(0).toUpperCase() + title.slice(1)}</b>
      </h3>
      <p>
        Post: <b>{body.charAt(0).toUpperCase() + body.slice(1)}</b>
      </p>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={() => handleEdit(post)}
        >
          edit
        </button>
        {/* {comment && comment.id === post.id ? (
          <form>
            {" "}
            <input type="text"></input>{" "}
            <input type="submit" value="Reply to Post" />
          </form>
        ) : (
          ""
        )}
        <button
          className="btn btn-dark btn-sm"
          onClick={() => handleComment(post)}
        >
          Comment
        </button> */}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(_id)}
        >
          delete
        </button>
      </p>
    </div>
  );
};

export default PostItem;
