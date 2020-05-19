import React from "react";
import Posts from "./Posts";

const OrgPostsList = (props) => {
  let posts = props.posts;
  const postlist = posts.map((post) => {
    return (
      <Posts
        key={post.id}
        title={post.title}
        description={post.description}
        date={post.date_posted}
      />
    );
  });

  return <ul>{postlist}</ul>;
};

export default OrgPostsList;

