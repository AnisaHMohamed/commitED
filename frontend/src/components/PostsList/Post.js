import React from "react";
import Button from "../CustomButtons/Button";

const Post = ({ showPostModal, post }) => {
  //showpostmodal sets post to show in postlist for popup post onclick
  return (
    <Button
      style={{ borderRadius: "5px" }}
      height="40px"
      justify-content="left"
      block
      color="info"
      onClick={showPostModal}
    >
      <div key={post.id}>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          <li style={{ fontSize: 19, listStyleType: "none" }}>{post.title}</li>
        </ul>
      </div>
    </Button>
  );
};
export default Post;
