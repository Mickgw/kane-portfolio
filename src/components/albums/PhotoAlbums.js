// import cardBGplaceholder from "../../assets/images/portrait-placeholder1.jpeg";
import photoAlbums from "../../content/photo-albums.json";
import { Link } from "react-router-dom";

import test from "../../assets/images/uploads/portrait-placeholder2.jpeg";

const PhotoAlbums = () => {
  return (
    <>
      <span className="divider-text">some photo albums</span>
      <hr className="divider" />

      <div className="photo-albums">
        <div className="container">
          <div className="album-card-grid">
            {photoAlbums.album_list.length &&
              photoAlbums.album_list.map((album, i) => {
                console.log("../../assets" + album.image);
                console.log(test);
                return (
                  <>
                    <Link className="links" to={`/albums/${album.title.replace(" ", "-").toLowerCase()}`}>
                      <div key={i} className="album-card">
                        <div
                          className="album-card-bg"
                          style={{ backgroundImage: `url(${album.image})` }}
                        ></div>
                        <div className="album-card-cover-content">
                          <span className="content-year-date">
                            {album.year}
                          </span>
                          <h2 className="content-header">{album.title}</h2>
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhotoAlbums;
