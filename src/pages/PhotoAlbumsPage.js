import React from "react";
import { useParams } from "react-router-dom";
import photoAlbums from "../content/photo-albums.json";

const PhotoAlbumsPage = () => {
  const { title } = useParams();

  return (
    <div className="album-page">
      <div className="divider-text">Album</div>
      <div className="album-page-grid"></div>
      {photoAlbums.album_list.map((album) => {
        if (title === album.title.replace(" ", "-").toLocaleLowerCase()) {
          return (
            <div className="album-info">
              <h1 className="album-title">{album.title}</h1>
              
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default PhotoAlbumsPage;
