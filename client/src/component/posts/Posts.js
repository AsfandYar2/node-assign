import React, { useContext, useEffect } from "react";
import PostContext from "../context/post/postContext";
import PostItem from "./PostItem";

const Posts = () => {
  const postContext = useContext(PostContext);
  const { posts, getPost } = postContext;
  useEffect(() => {
    getPost();
  }, []);
  if (posts === null || (posts !== null && posts.length === 0)) {
    return <h4>Please ADD your Posts</h4>;
  }
  return (
    <div>
      {posts && posts.map(post => <PostItem key={post.id} post={post} />)}
    </div>
  );
};

export default Posts;
