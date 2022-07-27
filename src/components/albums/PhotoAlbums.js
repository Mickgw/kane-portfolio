import photoAlbums from "../../content/photo-albums.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import FadeInWhenVisible from "../hooks/FadeInWhenVisible";

const PhotoAlbums = () => {
  return (
    <div className="photo-album-section">
      <FadeInWhenVisible>
        <h2 className="photo-albums-header">My Photo Albums</h2>
        <hr className="divider" />
      </FadeInWhenVisible>

      <div className="photo-albums">
        <div className="container">
          <div className="album-card-grid">
            {photoAlbums.album_list.map((album, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/albums/${album.title
                      .replace(" ", "-")
                      .toLocaleLowerCase()}`}
                  >
                    <FadeInWhenVisible>
                      <div className="album-card">
                        <div className="album-cover-container">
                          {/* <span className="album-cover-dot"> */}
                            {/* https://codepen.io/zachtownsend/pen/ZGQJOB */}
                            {/* <FontAwesomeIcon icon={faCircle} className="dot" /> */}
                            {/* <div className="album-cover-dot">
                              <span>view</span>
                            </div>
                          </span> */}
                          <div className="album-cover-dot">
                            <span className="album-cover-dot-text">
                              view
                            </span>
                          </div>

                          <div className="image-container">
                            <img
                              className="album-cover"
                              src={album.cover_image}
                              alt="album cover"
                            />
                          </div>
                        </div>
                        <div className="album-card-cover-content">
                          <h2 className="content-header">{album.title}</h2>
                          <span className="content-year-date">
                            {album.year}
                          </span>
                        </div>
                      </div>
                    </FadeInWhenVisible>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoAlbums;
