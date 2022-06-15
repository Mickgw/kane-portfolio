// import cardBGplaceholder from "../../assets/images/portrait-placeholder1.jpeg";
import photoAlbums from "../../content/photo-albums.json";
import { Link } from "react-router-dom";

const PhotoAlbums = () => {
  return (
    <>
      <span className="divider-text">some photo albums</span>
      <hr className="divider" />

      <div className="photo-albums">
        <div className="container">
          <div className="album-card-grid">
              {photoAlbums.album_list.map((album) => {
                return (
                  <>
                    <Link className="links" to={`/albums/${album.title.replace(" ", "-").toLocaleLowerCase()}`}>
                      <div className="album-card">
                        <div
                          className="album-card-bg"
                          style={{ backgroundImage: `url(${album.cover_image})` }}
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
