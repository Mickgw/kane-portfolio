import photoAlbums from "../../content/photo-albums.json";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "../hooks/FadeInWhenVisible";

import { TbArrowUpRight } from "react-icons/tb";

const PhotoAlbums = () => {
  return (
    <div className="photo-album-section" data-scroll-section>
      <FadeInWhenVisible>
        <h2 className="photo-albums-header">My Photo Albums</h2>
      </FadeInWhenVisible>

      <div className="photo-albums">
        <div className="container">
          <div className="album-card-grid">
            {photoAlbums.album_list.map((album, index) => {
              return (
                <div key={index}>
                  <Link
                    to={`/albums/${album.title
                      .replaceAll(" ", "-")
                      .toLocaleLowerCase()}`}
                  >
                    <FadeInWhenVisible>
                      <div className="album-card">
                        <div className="album-cover-container">
                          <div className="album-cover-dot">
                            <svg
                              viewBox="0 0 100 100"
                              xmlns="http://www.w3.org/2000/svg"
                              className="dot"
                            >
                              <circle cx="50" cy="50" r="43" id="dot-stroke"/>
                            </svg>

                            <div className="album-cover-dot-text-container">
                              <TbArrowUpRight className="album-cover-dot-text" />
                            </div>
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
