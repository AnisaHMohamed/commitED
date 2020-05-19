import React from "react";
import classnames from "classnames";
import Button from "../CustomButtons";

const PostButton = (props) => {
  let buttonClass = classnames("button", {
    "button--confirm": props.confirm,
    "button--danger": props.danger,
  });
  // customize to Posts
  return (
    <Button simple color="info" size="lg">
      {props.children}
    </Button>
  );
};
export default Post;
