import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import photo_albums from "../content/photo-albums.json";

const PhotoAlbumsPage = (props) => {
  const validId = parseInt(props.match.params.id);

  useEffect(() => {
    console.log("ValidURL = ", validId);
  });

  if (!validId) {
    return <Navigate to="/404" />;
  }
  const fetchedPost = {};
  let postExists = false;
  photo_albums.forEach((albums) => {
    if (validId === albums.id) {
      fetchedPost.title = albums.title ? albums.title : "No title given";
      fetchedPost.date = albums.date ? albums.date : "No date given";
      fetchedPost.author = albums.author ? albums.author : "No author given";
      fetchedPost.content = albums.content ? albums.content : "No content given";
      postExists = true;
    }
  });
  if (postExists === false) {
    return <Navigate to="/404" />;
  }
  return (
    <>
      <div className="post">
        <h1>{fetchedPost.title}</h1>
        <hr />
      </div>
    </>
  );
};

export default PhotoAlbumsPage;
