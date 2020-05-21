import React, { useState } from "react";
import PopupPost from "./PopupPost";
import Post from "./Post";
import Roboto from "../../assets/jss/material-kit-react/components/typographyStyle";

const PostsList = ({ getPosts, posts, user }) => {
  //stores data of post to be passed in as prop on click for popuppost component
  const [postToShow, setPostToShow] = useState();

  const volunteerPosts = posts;
  //filtered posts belonging to the service provider logged in
  if (user) {
    const serviceProviderPosts = posts.filter((post) => {
      return user.type === "service_provider" && post.user_id === user.id;
    });

    if (user && user.type === "service_provider") {
      posts = serviceProviderPosts;
    } else {
      posts = volunteerPosts;
    }
  }

  return (
    <React.Fragment>
      <div
        style={{
          fontFamily: Roboto,
          fontSize: 18,
          textAlign: "center",
          color: "#4D4D4D",
        }}
      >
        <h1>OPPORTUNITIES</h1>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Post post={post} showPostModal={() => setPostToShow(post)} />
            </li>
          ))}
        </ul>
        {postToShow && (
          <PopupPost
            user={user}
            post={postToShow}
            onClose={() => setPostToShow(null)}
            getPosts={getPosts}
          />
        )}
      </div>
    </React.Fragment>
  );
};
export default PostsList;
