import React from "react";
import { useParams } from "react-router-dom";
import photoAlbums from "../content/photo-albums.json";
import { useEffect } from "react";

const PhotoAlbumsPage = () => {
  const { title } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="album-page">
      <div className="divider-text category">Album</div>
      <div className="container">
        {photoAlbums.album_list.map((album, index) => {
          if (title === album.title.replace(" ", "-").toLocaleLowerCase()) {
            return (
              <div className="album-data" key={index}>
                <div className="album-info-grid">
                  <div className="album-facts">
                    <h1 className="album-title">{album.title}</h1>
                    <div className="divider-text category">year</div>
                    <h4 className="album-year">{album.year}</h4>
                    <div className="divider-text category">camera</div>
                    <h4 className="camera-name">{album.camera}</h4>
                    <div className="divider-text category">camera lens</div>
                    <h4 className="camera-name">{album.camera_lens}</h4>
                  </div>

                  <div className="album-description">
                    <p className="album-description-paragraph">
                      {album.description}
                    </p>
                  </div>
                </div>
                <div className="album-images">
                  {album.images.map((album_image, index) => {
                    return (
                      <div className="nothing" key={index}>
                        <img
                          className="album-image"
                          src={album_image}
                          alt="images photos"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default PhotoAlbumsPage;
